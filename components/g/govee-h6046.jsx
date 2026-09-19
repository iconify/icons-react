import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvcc9_byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvcc9_byb"/>`,
		"fallback": "cbi:govee-h6046",
	});
}

export default Component;
