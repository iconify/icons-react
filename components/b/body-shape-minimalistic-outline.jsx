import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm92yt0_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hm92yt0_z"/>`,
		"fallback": "solar:body-shape-minimalistic-outline",
	});
}

export default Component;
