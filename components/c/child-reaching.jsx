import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s34di-i6c.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s34di-i6c"/>`,
		"fallback": "fa6-solid:child-reaching",
	});
}

export default Component;
