import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnd6xk9ff.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qnd6xk9ff"/>`,
		"fallback": "lsicon:align-txt-both-filled",
	});
}

export default Component;
