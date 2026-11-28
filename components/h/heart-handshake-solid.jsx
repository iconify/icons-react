import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshwhhb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshwhhb0j"/>`,
		"fallback": "iconaut:heart-handshake-solid",
	});
}

export default Component;
