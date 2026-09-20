import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl3uehkus.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl3uehkus"/>`,
		"fallback": "ix:box-closed",
	});
}

export default Component;
