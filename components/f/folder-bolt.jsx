import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp6f5cbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp6f5cbmh"/>`,
		"fallback": "tabler:folder-bolt",
	});
}

export default Component;
