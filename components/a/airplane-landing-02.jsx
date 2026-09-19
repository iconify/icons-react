import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bs3s9vbml.css';
import '../../css/c/cwgd6uiee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bs3s9vbml"/><path class="cwgd6uiee"/></g>`,
		"fallback": "hugeicons:airplane-landing-02",
	});
}

export default Component;
