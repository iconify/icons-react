import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6-3i_q-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6-3i_q-f"/>`,
		"fallback": "streamline-ultimate:connector-1-bold",
	});
}

export default Component;
