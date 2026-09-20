import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgb9rmbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgb9rmbji"/>`,
		"fallback": "mage:direction-right-2-fill",
	});
}

export default Component;
