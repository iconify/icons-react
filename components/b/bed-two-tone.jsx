import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jh83o49ny.css';
import '../../css/s/s7zkpubbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jh83o49ny"/><path class="s7zkpubbl"/></g>`,
		"fallback": "keyline-icons:bed-two-tone",
	});
}

export default Component;
