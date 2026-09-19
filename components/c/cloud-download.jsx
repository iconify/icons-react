import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr6fn7b-l.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr6fn7b-l"/>`,
		"fallback": "zmdi:cloud-download",
	});
}

export default Component;
