import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epd4epbrs.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epd4epbrs"/>`,
		"fallback": "fa6-solid:anchor-circle-check",
	});
}

export default Component;
