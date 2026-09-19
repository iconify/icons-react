import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz5z4w1dv.css';

const viewBox = {"width":2560,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz5z4w1dv"/>`,
		"fallback": "fluent-mdl2:git-fork",
	});
}

export default Component;
