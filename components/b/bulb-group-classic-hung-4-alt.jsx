import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njyl-vsgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njyl-vsgz"/>`,
		"fallback": "cbi:bulb-group-classic-hung-4-alt",
	});
}

export default Component;
