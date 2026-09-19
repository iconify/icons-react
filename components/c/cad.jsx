import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4nt8lb7k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4nt8lb7k"/>`,
		"fallback": "carbon:cad",
	});
}

export default Component;
