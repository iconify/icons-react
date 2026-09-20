import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx-2w7bbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx-2w7bbw"/>`,
		"fallback": "mage:dots-square-fill",
	});
}

export default Component;
