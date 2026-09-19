import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa421_b6g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa421_b6g"/>`,
		"fallback": "codicon:arrow-small-down",
	});
}

export default Component;
