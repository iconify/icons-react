import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_8-66btj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_8-66btj"/>`,
		"fallback": "cbi:desk-lamp",
	});
}

export default Component;
