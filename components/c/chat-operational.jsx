import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7smeqbeh.css';
import '../../css/v/va27ux4ej.css';
import '../../css/t/tsepx-fqx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7smeqbeh"/><path class="va27ux4ej"/><path class="tsepx-fqx"/>`,
		"fallback": "carbon:chat-operational",
	});
}

export default Component;
