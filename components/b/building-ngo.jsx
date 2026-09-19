import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uscn-ogcr.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uscn-ogcr"/>`,
		"fallback": "fa6-solid:building-ngo",
	});
}

export default Component;
