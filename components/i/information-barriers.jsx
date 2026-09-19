import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2ddm3b8a.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2ddm3b8a"/>`,
		"fallback": "fluent-mdl2:information-barriers",
	});
}

export default Component;
