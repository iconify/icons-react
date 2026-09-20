import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab9qd1foj.css';

const viewBox = {"width":6,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab9qd1foj"/>`,
		"fallback": "octicon:arrow-small-right",
	});
}

export default Component;
