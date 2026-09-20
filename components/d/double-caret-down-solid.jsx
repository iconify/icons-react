import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr-3xacjv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rr-3xacjv"/>`,
		"fallback": "teenyicons:double-caret-down-solid",
	});
}

export default Component;
