import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is-zrhb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="is-zrhb5n"/>`,
		"fallback": "reicon:cart-shop",
	});
}

export default Component;
