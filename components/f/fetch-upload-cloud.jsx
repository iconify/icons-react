import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6z_u39ix.css';
import '../../css/k/kfaykc6be.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6z_u39ix"/><path class="kfaykc6be"/>`,
		"fallback": "carbon:fetch-upload-cloud",
	});
}

export default Component;
