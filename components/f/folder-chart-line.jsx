import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyhgvun_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyhgvun_n"/>`,
		"fallback": "ri:folder-chart-line",
	});
}

export default Component;
