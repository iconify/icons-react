import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzs66bwwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzs66bwwb"/>`,
		"fallback": "withicons:headset-gloss",
	});
}

export default Component;
