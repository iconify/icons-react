import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5-1m4u-m.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5-1m4u-m"/>`,
		"fallback": "f7:checkmark-alt-circle-fill",
	});
}

export default Component;
