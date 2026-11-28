import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spb1f5bdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spb1f5bdr"/>`,
		"fallback": "noviair-light:burger",
	});
}

export default Component;
