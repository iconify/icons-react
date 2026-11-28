import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz_1vmb4y.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ktq1g1b0a.css';
import '../../css/a/ajv3mbcxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz_1vmb4y secondary"/><g class="dt0cm9dhy primary"><path class="ktq1g1b0a"/><path class="ajv3mbcxk"/></g>`,
		"fallback": "iconaut:battery-empty-duo",
	});
}

export default Component;
