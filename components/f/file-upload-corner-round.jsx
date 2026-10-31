import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch3n8pvnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch3n8pvnp"/>`,
		"fallback": "coolicons:file-upload-corner-round",
	});
}

export default Component;
