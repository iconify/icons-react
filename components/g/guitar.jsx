import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mohn2ccty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mohn2ccty"/>`,
		"fallback": "noviair:guitar",
	});
}

export default Component;
