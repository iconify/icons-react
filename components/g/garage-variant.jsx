import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npkxwdz1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npkxwdz1f"/>`,
		"fallback": "mdi:garage-variant",
	});
}

export default Component;
