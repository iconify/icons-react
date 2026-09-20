import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzc8v-b8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzc8v-b8g"/>`,
		"fallback": "uim:corner-left-down",
	});
}

export default Component;
