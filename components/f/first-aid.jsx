import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xandkdpjf.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xandkdpjf"/>`,
		"fallback": "fa-solid:first-aid",
	});
}

export default Component;
