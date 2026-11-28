import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko0w27bua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko0w27bua"/>`,
		"fallback": "noviair:folder-plus",
	});
}

export default Component;
