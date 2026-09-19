import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygzf0o_ld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygzf0o_ld"/>`,
		"fallback": "cbi:elgato-key-light-air",
	});
}

export default Component;
