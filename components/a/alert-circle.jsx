import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fshn_2bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fshn_2bqo"/>`,
		"fallback": "tabler:alert-circle",
	});
}

export default Component;
