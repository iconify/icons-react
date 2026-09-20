import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf46fub7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf46fub7v"/>`,
		"fallback": "keyline-icons:circle-pause",
	});
}

export default Component;
