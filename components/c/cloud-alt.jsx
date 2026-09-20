import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc2fcx.css';
import '../../css/s/so-from-60.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc2fcx"/>`,
		"fallback": "line-md:cloud-alt",
	});
}

export default Component;
