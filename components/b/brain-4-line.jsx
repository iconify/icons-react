import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4n3vub7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4n3vub7v"/>`,
		"fallback": "ri:brain-4-line",
	});
}

export default Component;
