import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu6n-abkm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu6n-abkm"/>`,
		"fallback": "bi:brightness-low-fill",
	});
}

export default Component;
