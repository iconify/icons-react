import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suju9flbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suju9flbu"/>`,
		"fallback": "hugeicons:audio-wave-01",
	});
}

export default Component;
