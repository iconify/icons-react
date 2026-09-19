import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylbdoee0o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylbdoee0o"/>`,
		"fallback": "codicon:index-zero",
	});
}

export default Component;
