import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz9hxmb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz9hxmb4t"/>`,
		"fallback": "ri:file-chart-2-fill",
	});
}

export default Component;
