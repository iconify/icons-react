import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maqgd4b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maqgd4b9w"/>`,
		"fallback": "simple-icons:bamboo",
	});
}

export default Component;
