import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_jbvkbbv.css';
import '../../css/y/ypv4l3ivv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_jbvkbbv"/><path class="ypv4l3ivv"/>`,
		"fallback": "garden:file-error-stroke-20",
	});
}

export default Component;
