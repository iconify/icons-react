import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu1bc8bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu1bc8bja"/>`,
		"fallback": "streamline-ultimate:co-working-space-laptop-bold",
	});
}

export default Component;
