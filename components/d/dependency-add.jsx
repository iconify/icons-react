import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5unvac5a.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5unvac5a"/>`,
		"fallback": "fluent-mdl2:dependency-add",
	});
}

export default Component;
