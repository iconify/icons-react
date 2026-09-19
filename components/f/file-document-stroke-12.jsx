import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suhh-xi_j.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suhh-xi_j"/>`,
		"fallback": "garden:file-document-stroke-12",
	});
}

export default Component;
