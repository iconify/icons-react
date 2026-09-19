import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_3jo0xpp.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_3jo0xpp"/>`,
		"fallback": "fa6-solid:flag-checkered",
	});
}

export default Component;
