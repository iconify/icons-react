import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqn1kbb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqn1kbb3l"/>`,
		"fallback": "lucide:hash",
	});
}

export default Component;
