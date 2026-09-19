import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyktx9_mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyktx9_mv"/>`,
		"fallback": "boxicons:bookmark-plus-alt-filled",
	});
}

export default Component;
