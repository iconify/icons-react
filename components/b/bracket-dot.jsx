import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abo0go4gu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abo0go4gu"/>`,
		"fallback": "codicon:bracket-dot",
	});
}

export default Component;
