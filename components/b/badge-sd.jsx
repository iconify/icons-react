import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj2r2fivx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj2r2fivx"/>`,
		"fallback": "bi:badge-sd",
	});
}

export default Component;
