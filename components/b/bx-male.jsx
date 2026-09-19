import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfz3w9lrl.css';
import '../../css/v/v8_9c9byc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yfz3w9lrl"/><path class="v8_9c9byc"/>`,
		"fallback": "bx:bx-male",
	});
}

export default Component;
