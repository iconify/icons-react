import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv7f0q5lo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iv7f0q5lo"/>`,
		"fallback": "pepicons:film-frame",
	});
}

export default Component;
