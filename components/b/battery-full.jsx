import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wco7hpz_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wco7hpz_l"/>`,
		"fallback": "majesticons:battery-full",
	});
}

export default Component;
