import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8a918fho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8a918fho"/>`,
		"fallback": "streamline-ultimate:cd-broken-bold",
	});
}

export default Component;
