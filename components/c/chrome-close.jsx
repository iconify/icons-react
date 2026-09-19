import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-j74pbak.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-j74pbak"/>`,
		"fallback": "codicon:chrome-close",
	});
}

export default Component;
