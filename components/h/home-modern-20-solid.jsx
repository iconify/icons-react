import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf1w6ybal.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf1w6ybal"/>`,
		"fallback": "heroicons:home-modern-20-solid",
	});
}

export default Component;
