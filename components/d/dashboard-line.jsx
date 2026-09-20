import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t21_8ba5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t21_8ba5f"/>`,
		"fallback": "ri:dashboard-line",
	});
}

export default Component;
