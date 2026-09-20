import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hsrj82bjj.css';
import '../../css/m/muj1xkb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hsrj82bjj"/><path class="muj1xkb6m"/></g>`,
		"fallback": "streamline-sharp:graphic-template-website-ui",
	});
}

export default Component;
