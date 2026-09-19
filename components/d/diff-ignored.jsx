import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rktcl5r9f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rktcl5r9f"/>`,
		"fallback": "codicon:diff-ignored",
	});
}

export default Component;
