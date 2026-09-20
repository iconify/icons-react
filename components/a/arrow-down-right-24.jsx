import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3b46jbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3b46jbqv"/>`,
		"fallback": "octicon:arrow-down-right-24",
	});
}

export default Component;
