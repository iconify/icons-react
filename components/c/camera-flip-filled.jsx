import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugtzrtb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugtzrtb5l"/>`,
		"fallback": "boxicons:camera-flip-filled",
	});
}

export default Component;
