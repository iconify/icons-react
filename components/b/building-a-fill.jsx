import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xezfrunop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xezfrunop"/>`,
		"fallback": "mage:building-a-fill",
	});
}

export default Component;
