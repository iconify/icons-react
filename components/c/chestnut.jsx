import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz0edq0jt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz0edq0jt"/>`,
		"fallback": "fluent-emoji-high-contrast:chestnut",
	});
}

export default Component;
