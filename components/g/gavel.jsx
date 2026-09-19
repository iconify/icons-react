import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0b9nfbxp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0b9nfbxp"/>`,
		"fallback": "fa-solid:gavel",
	});
}

export default Component;
