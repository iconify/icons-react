import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu5j-xg6b.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu5j-xg6b"/>`,
		"fallback": "fluent-mdl2:crown-solid",
	});
}

export default Component;
