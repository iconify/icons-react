import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm-v76dnd.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm-v76dnd"/>`,
		"fallback": "zmdi:crop-3-2",
	});
}

export default Component;
