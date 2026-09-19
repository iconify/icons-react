import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxljl4b8t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxljl4b8t"/>`,
		"fallback": "dashicons:id",
	});
}

export default Component;
