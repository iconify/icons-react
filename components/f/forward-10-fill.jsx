import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irz_gyb2v.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irz_gyb2v"/>`,
		"fallback": "pullo:forward-10-fill",
	});
}

export default Component;
