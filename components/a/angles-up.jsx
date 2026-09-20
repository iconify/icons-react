import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgl53ia8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgl53ia8m"/>`,
		"fallback": "meteor-icons:angles-up",
	});
}

export default Component;
