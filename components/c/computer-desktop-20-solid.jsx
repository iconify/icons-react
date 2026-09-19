import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp7c5ww4y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tp7c5ww4y"/>`,
		"fallback": "heroicons:computer-desktop-20-solid",
	});
}

export default Component;
