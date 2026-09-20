import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igjvtxb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="igjvtxb4z"/>`,
		"fallback": "lets-icons:3d-box-fill",
	});
}

export default Component;
