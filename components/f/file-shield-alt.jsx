import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1p4y9t4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1p4y9t4f"/>`,
		"fallback": "uil:file-shield-alt",
	});
}

export default Component;
