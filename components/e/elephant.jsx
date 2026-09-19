import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hwedgwb1d.css';
import '../../css/z/zn0m79bnw.css';
import '../../css/o/o8y35xbbr.css';
import '../../css/t/tq8vc0lgj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hwedgwb1d"/><path class="zn0m79bnw"/><path class="o8y35xbbr"/><path class="tq8vc0lgj"/></g>`,
		"fallback": "fluent-emoji-flat:elephant",
	});
}

export default Component;
