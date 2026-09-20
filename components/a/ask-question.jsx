import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_y028i5j.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_y028i5j"/>`,
		"fallback": "wpf:ask-question",
	});
}

export default Component;
