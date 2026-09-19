import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m11nyaclq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m11nyaclq"/>`,
		"fallback": "fluent-mdl2:cut",
	});
}

export default Component;
