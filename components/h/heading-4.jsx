import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl7231b9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl7231b9m"/>`,
		"fallback": "keyline-icons:heading-4",
	});
}

export default Component;
