import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkij0r87r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkij0r87r"/>`,
		"fallback": "oui:function-add",
	});
}

export default Component;
