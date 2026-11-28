import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_s8ribpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_s8ribpk"/>`,
		"fallback": "noviair-light:droplet-x",
	});
}

export default Component;
