import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m49pj6bjg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m49pj6bjg"/>`,
		"fallback": "codicon:cloud",
	});
}

export default Component;
