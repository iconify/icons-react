import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd816bv3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd816bv3q"/>`,
		"fallback": "iconaut:folder-check-solid",
	});
}

export default Component;
