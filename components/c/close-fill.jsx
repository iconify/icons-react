import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjkg-qtlz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jjkg-qtlz"/>`,
		"fallback": "iconamoon:close-fill",
	});
}

export default Component;
