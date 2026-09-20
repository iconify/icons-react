import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjc94rm5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjc94rm5v"/>`,
		"fallback": "ri:command-line",
	});
}

export default Component;
