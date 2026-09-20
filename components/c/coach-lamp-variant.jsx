import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlp52tbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlp52tbcn"/>`,
		"fallback": "mdi:coach-lamp-variant",
	});
}

export default Component;
