import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsz7u7b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsz7u7b1m"/>`,
		"fallback": "ri:brush-fill",
	});
}

export default Component;
