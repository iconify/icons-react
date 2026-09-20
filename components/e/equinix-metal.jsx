import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh2yl7b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh2yl7b2c"/>`,
		"fallback": "thesvg:equinix-metal",
	});
}

export default Component;
