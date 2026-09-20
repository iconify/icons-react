import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q00slbc9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q00slbc9o"/>`,
		"fallback": "meteor-icons:check",
	});
}

export default Component;
