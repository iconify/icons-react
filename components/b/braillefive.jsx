import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q--6p1bcv.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q--6p1bcv"/>`,
		"fallback": "whh:braillefive",
	});
}

export default Component;
