import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_9fuxcko.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_9fuxcko"/>`,
		"fallback": "temaki:blind",
	});
}

export default Component;
