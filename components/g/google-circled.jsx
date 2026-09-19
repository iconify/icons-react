import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/favsm8bml.css';
import '../../css/z/zeggah3kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="favsm8bml"/><path class="zeggah3kn"/></g>`,
		"fallback": "iconoir:google-circled",
	});
}

export default Component;
