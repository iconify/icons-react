import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkxsjvhwz.css';
import '../../css/j/jzj453buj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pkxsjvhwz"/><path clip-rule="evenodd" class="jzj453buj"/>`,
		"fallback": "qlementine-icons:address-book-16",
	});
}

export default Component;
