import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0sscpbxm.css';
import '../../css/t/toyc3i1pu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0sscpbxm"/><path class="toyc3i1pu"/>`,
		"fallback": "boxicons:camera-home-filled",
	});
}

export default Component;
