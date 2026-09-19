import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh-ng8b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dh-ng8b3n"/>`,
		"fallback": "healthicons:chart-bar-stacked-outline-24px",
	});
}

export default Component;
