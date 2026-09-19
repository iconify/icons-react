import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9yj2abcl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9yj2abcl"/>`,
		"fallback": "icon-park-outline:badge",
	});
}

export default Component;
