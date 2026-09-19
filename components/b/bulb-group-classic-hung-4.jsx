import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvsxk8p_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvsxk8p_i"/>`,
		"fallback": "cbi:bulb-group-classic-hung-4",
	});
}

export default Component;
