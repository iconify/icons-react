import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw6_glbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yw6_glbvx"/>`,
		"fallback": "akar-icons:circle-chevron-up-fill",
	});
}

export default Component;
