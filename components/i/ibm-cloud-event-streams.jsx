import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf52vtinf.css';
import '../../css/r/rsmyz1hsn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf52vtinf"/><path class="rsmyz1hsn"/>`,
		"fallback": "carbon:ibm-cloud-event-streams",
	});
}

export default Component;
