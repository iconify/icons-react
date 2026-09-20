import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpe14k1eo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpe14k1eo"/>`,
		"fallback": "meteor-icons:chain",
	});
}

export default Component;
