import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm60-5ffo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm60-5ffo"/>`,
		"fallback": "fluent-mdl2:fast-forward-one-five-x",
	});
}

export default Component;
