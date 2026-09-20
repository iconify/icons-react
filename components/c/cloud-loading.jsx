import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c521n5b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c521n5b2g"/>`,
		"fallback": "streamline-ultimate:cloud-loading",
	});
}

export default Component;
