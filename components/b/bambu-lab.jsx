import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybpws6oqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybpws6oqz"/>`,
		"fallback": "cbi:bambu-lab",
	});
}

export default Component;
