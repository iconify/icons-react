import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i02wx60ix.css';
import '../../css/s/sr20y9sto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i02wx60ix"/><path class="sr20y9sto"/></g>`,
		"fallback": "solar:folder-output-line-duotone",
	});
}

export default Component;
