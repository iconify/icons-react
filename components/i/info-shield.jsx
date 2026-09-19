import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m747jmphf.css';
import '../../css/v/v88_xacul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m747jmphf"/><path class="v88_xacul"/>`,
		"fallback": "boxicons:info-shield",
	});
}

export default Component;
