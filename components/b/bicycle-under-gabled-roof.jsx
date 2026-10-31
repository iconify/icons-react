import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amqo51b_t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amqo51b_t"/>`,
		"fallback": "pinhead:bicycle-under-gabled-roof",
	});
}

export default Component;
