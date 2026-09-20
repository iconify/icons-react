import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiz7kmq3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiz7kmq3z"/>`,
		"fallback": "keyline-icons:globe-cursor",
	});
}

export default Component;
