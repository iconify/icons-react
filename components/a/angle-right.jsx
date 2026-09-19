import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg6nrp1ic.css';

const viewBox = {"width":608,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(608 0) scale(-1 1)"><path class="rg6nrp1ic"/></g>`,
		"fallback": "fa:angle-right",
	});
}

export default Component;
