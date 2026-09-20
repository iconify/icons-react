import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdfn_0okk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdfn_0okk"/>`,
		"fallback": "mdi:farewell-outline",
	});
}

export default Component;
