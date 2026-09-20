import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nln9_m3-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nln9_m3-v"/>`,
		"fallback": "tabler:guitar-pick-filled",
	});
}

export default Component;
