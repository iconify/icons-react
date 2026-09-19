import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcmht4bdl.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcmht4bdl"/>`,
		"fallback": "zmdi:hq",
	});
}

export default Component;
