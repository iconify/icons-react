import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1kfg9b6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1kfg9b6l"/>`,
		"fallback": "meteor-icons:badge-check",
	});
}

export default Component;
