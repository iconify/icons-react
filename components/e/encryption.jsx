import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs2ycjb1b.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs2ycjb1b"/>`,
		"fallback": "fluent-mdl2:encryption",
	});
}

export default Component;
