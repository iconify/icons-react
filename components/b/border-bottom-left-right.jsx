import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v38rgqb5e.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v38rgqb5e"/>`,
		"fallback": "memory:border-bottom-left-right",
	});
}

export default Component;
