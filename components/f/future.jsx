import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrp6a7bmr.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrp6a7bmr"/>`,
		"fallback": "wpf:future",
	});
}

export default Component;
