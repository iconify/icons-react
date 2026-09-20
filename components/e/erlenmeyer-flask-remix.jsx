import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_t6k4brw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w_t6k4brw"/>`,
		"fallback": "streamline-plump:erlenmeyer-flask-remix",
	});
}

export default Component;
