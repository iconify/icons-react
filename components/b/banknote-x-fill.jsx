import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/trffibc6h.css';
import '../../css/u/ug-17ffme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="trffibc6h"/><path class="ug-17ffme"/></g>`,
		"fallback": "keyline-icons:banknote-x-fill",
	});
}

export default Component;
