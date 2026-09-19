import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei-d5jmkw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei-d5jmkw"/>`,
		"fallback": "codicon:clear-all",
	});
}

export default Component;
