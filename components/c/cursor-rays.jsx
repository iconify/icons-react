import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v--_2jb1u.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v--_2jb1u"/>`,
		"fallback": "f7:cursor-rays",
	});
}

export default Component;
