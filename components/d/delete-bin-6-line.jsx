import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxfps32he.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxfps32he"/>`,
		"fallback": "ri:delete-bin-6-line",
	});
}

export default Component;
