import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v1vtmdbwk.css';
import '../../css/t/te_btlbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v1vtmdbwk"/><path class="te_btlbjp"/></g>`,
		"fallback": "keyline-icons:inbox-duotone",
	});
}

export default Component;
