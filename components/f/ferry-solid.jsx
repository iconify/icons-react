import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuz-oqqog.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuz-oqqog"/>`,
		"fallback": "fluent-mdl2:ferry-solid",
	});
}

export default Component;
