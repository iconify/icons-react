import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-el6m66m.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-el6m66m"/>`,
		"fallback": "simple-line-icons:control-start",
	});
}

export default Component;
