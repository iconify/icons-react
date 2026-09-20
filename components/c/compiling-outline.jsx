import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d06s-2bqg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d06s-2bqg"/>`,
		"fallback": "lsicon:compiling-outline",
	});
}

export default Component;
