import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zdn9vqbnn.css';
import '../../css/t/trjkit8hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zdn9vqbnn"/><path class="trjkit8hc"/></g>`,
		"fallback": "keyline-icons:audio-lines-two-tone",
	});
}

export default Component;
