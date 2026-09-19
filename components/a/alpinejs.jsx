import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-11jrk6e.css';
import '../../css/z/zx7fs7byh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j-11jrk6e"/><path clip-rule="evenodd" class="zx7fs7byh"/>`,
		"fallback": "devicon:alpinejs",
	});
}

export default Component;
