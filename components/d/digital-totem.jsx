import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv-n-8s8g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv-n-8s8g"/>`,
		"fallback": "pinhead:digital-totem",
	});
}

export default Component;
