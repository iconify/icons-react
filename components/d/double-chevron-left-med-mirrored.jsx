import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy6u54b3c.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy6u54b3c"/>`,
		"fallback": "fluent-mdl2:double-chevron-left-med-mirrored",
	});
}

export default Component;
