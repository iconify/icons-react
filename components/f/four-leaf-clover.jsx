import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq1nambya.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq1nambya"/>`,
		"fallback": "dinkie-icons:four-leaf-clover",
	});
}

export default Component;
