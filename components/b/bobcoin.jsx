import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc0nbzble.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc0nbzble"/>`,
		"fallback": "carbon:bobcoin",
	});
}

export default Component;
