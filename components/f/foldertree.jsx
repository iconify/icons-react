import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2edwjb5n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2edwjb5n"/>`,
		"fallback": "whh:foldertree",
	});
}

export default Component;
