import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtp_siu6y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtp_siu6y"/>`,
		"fallback": "garden:download-stroke-16",
	});
}

export default Component;
