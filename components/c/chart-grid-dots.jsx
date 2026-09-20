import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzmgwjdbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzmgwjdbd"/>`,
		"fallback": "tabler:chart-grid-dots",
	});
}

export default Component;
