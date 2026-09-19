import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owivm4o1c.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owivm4o1c"/>`,
		"fallback": "fluent-mdl2:alarm-clock",
	});
}

export default Component;
