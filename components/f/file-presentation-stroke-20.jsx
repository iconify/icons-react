import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka08yacpr.css';
import '../../css/y/ypv4l3ivv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka08yacpr"/><path class="ypv4l3ivv"/>`,
		"fallback": "garden:file-presentation-stroke-20",
	});
}

export default Component;
