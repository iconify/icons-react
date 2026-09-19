import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af4-9ib1w.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af4-9ib1w"/>`,
		"fallback": "fa6-solid:house-flag",
	});
}

export default Component;
