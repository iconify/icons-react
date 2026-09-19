import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psdg_7nuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psdg_7nuf"/>`,
		"fallback": "heroicons:bell-alert",
	});
}

export default Component;
