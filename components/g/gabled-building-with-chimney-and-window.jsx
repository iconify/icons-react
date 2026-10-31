import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb4moactm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb4moactm"/>`,
		"fallback": "pinhead:gabled-building-with-chimney-and-window",
	});
}

export default Component;
