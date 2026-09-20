import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk5-6fd1e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kk5-6fd1e"/>`,
		"fallback": "teenyicons:double-caret-up-circle-solid",
	});
}

export default Component;
