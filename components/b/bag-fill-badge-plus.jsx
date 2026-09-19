import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wufwabb3k.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wufwabb3k"/>`,
		"fallback": "f7:bag-fill-badge-plus",
	});
}

export default Component;
