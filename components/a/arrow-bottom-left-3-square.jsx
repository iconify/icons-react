import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxcczh6dn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxcczh6dn"/>`,
		"fallback": "iconamoon:arrow-bottom-left-3-square",
	});
}

export default Component;
