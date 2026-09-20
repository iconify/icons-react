import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l86hmv1mk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l86hmv1mk"/>`,
		"fallback": "streamline-logos:douban-logo-solid",
	});
}

export default Component;
