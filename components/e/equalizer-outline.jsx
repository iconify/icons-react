import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhssxcbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhssxcbxq"/>`,
		"fallback": "mdi:equalizer-outline",
	});
}

export default Component;
