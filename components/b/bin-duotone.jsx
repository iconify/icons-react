import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fzhbw2bat.css';
import '../../css/w/w1rd7u16k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fzhbw2bat"/><path class="w1rd7u16k"/></g>`,
		"fallback": "keyline-icons:bin-duotone",
	});
}

export default Component;
