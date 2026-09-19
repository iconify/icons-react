import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vou3_l7ng.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vou3_l7ng"/>`,
		"fallback": "fa6-brands:git-square",
	});
}

export default Component;
