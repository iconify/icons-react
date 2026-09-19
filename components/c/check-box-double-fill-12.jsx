import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5sn11bpb.css';
import '../../css/w/w6kke-lrd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5sn11bpb"/><path class="w6kke-lrd"/>`,
		"fallback": "garden:check-box-double-fill-12",
	});
}

export default Component;
