import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2sbr4uqi.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2sbr4uqi"/>`,
		"fallback": "whh:hydrant",
	});
}

export default Component;
