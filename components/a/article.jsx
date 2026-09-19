import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6nw9ybaa.css';
import '../../css/n/n3vra2bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6nw9ybaa"/><path class="n3vra2bpp"/>`,
		"fallback": "boxicons:article",
	});
}

export default Component;
