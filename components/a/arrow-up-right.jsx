import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqo0nyghb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqo0nyghb"/>`,
		"fallback": "meteor-icons:arrow-up-right",
	});
}

export default Component;
