import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7mj_5rde.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7mj_5rde"/>`,
		"fallback": "fluent-mdl2:bus-solid",
	});
}

export default Component;
