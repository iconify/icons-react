import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad9uf7u_y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad9uf7u_y"/>`,
		"fallback": "selfhst:comfyui-dark",
	});
}

export default Component;
