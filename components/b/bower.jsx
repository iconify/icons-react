import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wofw3ubgb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wofw3ubgb"/>`,
		"fallback": "cib:bower",
	});
}

export default Component;
