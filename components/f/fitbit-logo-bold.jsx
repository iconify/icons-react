import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdk94ybiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdk94ybiv"/>`,
		"fallback": "streamline-ultimate:fitbit-logo-bold",
	});
}

export default Component;
