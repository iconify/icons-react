import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rliur8haw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rliur8haw"/>`,
		"fallback": "fluent-mdl2:arrow-tall-down-right",
	});
}

export default Component;
