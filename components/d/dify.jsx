import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf_mwkbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf_mwkbhd"/>`,
		"fallback": "simple-icons:dify",
	});
}

export default Component;
