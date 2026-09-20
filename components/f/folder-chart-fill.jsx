import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faa1knh-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faa1knh-v"/>`,
		"fallback": "ri:folder-chart-fill",
	});
}

export default Component;
