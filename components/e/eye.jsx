import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg7w6acib.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg7w6acib"/>`,
		"fallback": "codicon:eye",
	});
}

export default Component;
