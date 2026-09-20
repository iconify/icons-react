import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e7lqm9obr.css';
import '../../css/v/vfnvfqbwt.css';
import '../../css/w/wsmtlfbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e7lqm9obr"/><path clip-rule="evenodd" class="vfnvfqbwt"/><path class="wsmtlfbzo"/></g>`,
		"fallback": "keyline-icons:cable-duotone",
	});
}

export default Component;
