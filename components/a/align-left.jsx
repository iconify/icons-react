import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhwv2iwzn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhwv2iwzn"/>`,
		"fallback": "fluent-mdl2:align-left",
	});
}

export default Component;
