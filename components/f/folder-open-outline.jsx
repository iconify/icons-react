import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km69o8ksh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km69o8ksh"/>`,
		"fallback": "ix:folder-open-outline",
	});
}

export default Component;
