import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttzr14bwx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttzr14bwx"/>`,
		"fallback": "lsicon:bar-code-outline",
	});
}

export default Component;
