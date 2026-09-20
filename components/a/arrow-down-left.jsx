import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x61iccc4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x61iccc4p"/>`,
		"fallback": "uil:arrow-down-left",
	});
}

export default Component;
