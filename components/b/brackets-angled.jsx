import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9j6-o0-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9j6-o0-e"/>`,
		"fallback": "meteor-icons:brackets-angled",
	});
}

export default Component;
