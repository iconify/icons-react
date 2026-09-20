import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp5sblb8r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp5sblb8r"/>`,
		"fallback": "octicon:git-pull-request-16",
	});
}

export default Component;
