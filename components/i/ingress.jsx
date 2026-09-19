import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vngz4ll_k.css';

const viewBox = {"width":960,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vngz4ll_k"/>`,
		"fallback": "whh:ingress",
	});
}

export default Component;
