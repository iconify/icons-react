import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd178qyhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd178qyhn"/>`,
		"fallback": "streamline-ultimate:cellular-network-lte",
	});
}

export default Component;
