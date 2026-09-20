import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uao541b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uao541b2k"/>`,
		"fallback": "tabler:cloud-network",
	});
}

export default Component;
