import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgs0fsb9p.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgs0fsb9p"/>`,
		"fallback": "zmdi:image",
	});
}

export default Component;
