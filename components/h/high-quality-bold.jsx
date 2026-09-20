import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0ktwlbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m0ktwlbcd"/>`,
		"fallback": "solar:high-quality-bold",
	});
}

export default Component;
