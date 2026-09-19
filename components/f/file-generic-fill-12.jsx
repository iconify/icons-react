import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq8ar2_bj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq8ar2_bj"/>`,
		"fallback": "garden:file-generic-fill-12",
	});
}

export default Component;
