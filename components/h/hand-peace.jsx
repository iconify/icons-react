import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li9b89bqv.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li9b89bqv"/>`,
		"fallback": "fa-regular:hand-peace",
	});
}

export default Component;
