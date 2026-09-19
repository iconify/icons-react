import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd66qbc5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd66qbc5n"/>`,
		"fallback": "hugeicons:female-02",
	});
}

export default Component;
