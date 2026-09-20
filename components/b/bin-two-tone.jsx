import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fzhbw2bat.css';
import '../../css/u/uv7xiabtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fzhbw2bat"/><path class="uv7xiabtm"/></g>`,
		"fallback": "keyline-icons:bin-two-tone",
	});
}

export default Component;
