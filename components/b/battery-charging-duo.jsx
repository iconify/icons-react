import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r92msobqe.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ktq1g1b0a.css';
import '../../css/a/ajv3mbcxk.css';
import '../../css/n/n73f4kb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r92msobqe secondary"/><g class="dt0cm9dhy primary"><path class="ktq1g1b0a"/><path class="ajv3mbcxk"/><path class="n73f4kb6j"/></g>`,
		"fallback": "iconaut:battery-charging-duo",
	});
}

export default Component;
