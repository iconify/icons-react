import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o8h06wbke.css';
import '../../css/o/ocx9blbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="o8h06wbke"/><path class="ocx9blbvl"/></g>`,
		"fallback": "keyline-icons:circle-square-two-tone",
	});
}

export default Component;
