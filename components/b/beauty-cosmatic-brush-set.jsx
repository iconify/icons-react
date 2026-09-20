import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi01502br.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi01502br"/>`,
		"fallback": "streamline-pixel:beauty-cosmatic-brush-set",
	});
}

export default Component;
