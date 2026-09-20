import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgbr6jg2h.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgbr6jg2h"/>`,
		"fallback": "memory:close-outline",
	});
}

export default Component;
