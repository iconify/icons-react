import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m64zwy8rt.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m64zwy8rt"/>`,
		"fallback": "pullo:bow-and-arrow",
	});
}

export default Component;
