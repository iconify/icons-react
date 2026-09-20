import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcs9q456l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcs9q456l"/>`,
		"fallback": "pixel:broom",
	});
}

export default Component;
