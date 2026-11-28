import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooctjbb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooctjbb4e"/>`,
		"fallback": "iconaut:foldable-landscape-solid",
	});
}

export default Component;
