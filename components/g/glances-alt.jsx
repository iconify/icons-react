import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sav88e29u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sav88e29u"/>`,
		"fallback": "cbi:glances-alt",
	});
}

export default Component;
