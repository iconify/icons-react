import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wky75f0nh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wky75f0nh"/>`,
		"fallback": "griddy-icons:data-cloud-off-filled",
	});
}

export default Component;
