import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6a8c-fpg.css';

const viewBox = {"width":216.75,"height":91.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6a8c-fpg"/>`,
		"fallback": "thesvg-color:flowise",
	});
}

export default Component;
