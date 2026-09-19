import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfbvl-1qq.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfbvl-1qq"/>`,
		"fallback": "academicons:closed-access",
	});
}

export default Component;
