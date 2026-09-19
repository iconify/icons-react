import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zp5z_7bnr.css';
import '../../css/y/ynwoqqbhh.css';
import '../../css/t/trc-qdbdj.css';
import '../../css/q/qqk18db8j.css';
import '../../css/o/o8pou1bdl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zp5z_7bnr"/><path class="ynwoqqbhh"/><path class="trc-qdbdj"/><path class="qqk18db8j"/><path class="o8pou1bdl"/></g>`,
		"fallback": "fluent-emoji-flat:honeybee",
	});
}

export default Component;
