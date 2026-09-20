import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kszekzz1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kszekzz1y"/>`,
		"fallback": "qlementine-icons:chevron-left-24",
	});
}

export default Component;
