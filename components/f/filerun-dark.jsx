import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ket-5fbzv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ket-5fbzv"/>`,
		"fallback": "selfhst:filerun-dark",
	});
}

export default Component;
