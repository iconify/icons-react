import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp22y890s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp22y890s"/>`,
		"fallback": "griddy-icons:ecg-filled",
	});
}

export default Component;
