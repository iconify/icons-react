import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppgwzbb9y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppgwzbb9y"/>`,
		"fallback": "la:gg-circle",
	});
}

export default Component;
