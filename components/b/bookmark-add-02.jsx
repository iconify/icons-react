import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjpen32sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjpen32sr"/>`,
		"fallback": "hugeicons:bookmark-add-02",
	});
}

export default Component;
