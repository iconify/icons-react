import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsqabgb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zsqabgb6b"/>`,
		"fallback": "heroicons:bookmark-square-solid",
	});
}

export default Component;
