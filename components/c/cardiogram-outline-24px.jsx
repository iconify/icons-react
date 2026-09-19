import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu5w9ebgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu5w9ebgl"/>`,
		"fallback": "healthicons:cardiogram-outline-24px",
	});
}

export default Component;
