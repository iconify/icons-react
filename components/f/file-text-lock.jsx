import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg5se_bti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg5se_bti"/>`,
		"fallback": "noviair-light:file-text-lock",
	});
}

export default Component;
