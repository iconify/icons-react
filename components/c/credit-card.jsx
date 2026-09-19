import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajb4hcbbl.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajb4hcbbl"/>`,
		"fallback": "fa6-solid:credit-card",
	});
}

export default Component;
