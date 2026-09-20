import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgb4w9bxt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgb4w9bxt"/>`,
		"fallback": "sidekickicons:compass-20-solid",
	});
}

export default Component;
