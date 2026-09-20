import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kynx-6isf.css';
import '../../css/b/bjufppbwi.css';
import '../../css/y/ylytiqbzz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kynx-6isf"/><path class="bjufppbwi"/><path clip-rule="evenodd" class="ylytiqbzz"/>`,
		"fallback": "qlementine-icons:computer-16",
	});
}

export default Component;
