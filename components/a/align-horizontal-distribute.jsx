import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwd3o3boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwd3o3boq"/>`,
		"fallback": "mdi:align-horizontal-distribute",
	});
}

export default Component;
