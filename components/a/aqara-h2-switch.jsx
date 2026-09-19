import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl4nvkpwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl4nvkpwh"/>`,
		"fallback": "cbi:aqara-h2-switch",
	});
}

export default Component;
