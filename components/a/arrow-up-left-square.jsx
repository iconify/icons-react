import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axpkivbkf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axpkivbkf"/>`,
		"fallback": "f7:arrow-up-left-square",
	});
}

export default Component;
