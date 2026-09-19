import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syoi-0qiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syoi-0qiu"/>`,
		"fallback": "cbi:ikea-dimmer",
	});
}

export default Component;
