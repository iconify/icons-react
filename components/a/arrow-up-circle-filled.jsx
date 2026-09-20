import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcdl0kf_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcdl0kf_x"/>`,
		"fallback": "tdesign:arrow-up-circle-filled",
	});
}

export default Component;
