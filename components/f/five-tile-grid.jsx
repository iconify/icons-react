import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgv2o9bul.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgv2o9bul"/>`,
		"fallback": "fluent-mdl2:five-tile-grid",
	});
}

export default Component;
