import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/smiwupvsw.css';
import '../../css/v/vzvjqggfh.css';
import '../../css/t/thbtttbfi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="smiwupvsw"/><path class="vzvjqggfh"/><path class="thbtttbfi"/></g>`,
		"fallback": "fluent-emoji-flat:chart-increasing",
	});
}

export default Component;
