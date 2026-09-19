import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxan0itcu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxan0itcu"/>`,
		"fallback": "codicon:diff-renamed",
	});
}

export default Component;
