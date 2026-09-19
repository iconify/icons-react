import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93giq6ri.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o93giq6ri"/>`,
		"fallback": "zmdi:attachment",
	});
}

export default Component;
