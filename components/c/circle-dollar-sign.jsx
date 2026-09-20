import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uk-eumb3f.css';
import '../../css/z/z15tx_4tv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uk-eumb3f"/><path class="z15tx_4tv"/></g>`,
		"fallback": "keyline-icons:circle-dollar-sign",
	});
}

export default Component;
