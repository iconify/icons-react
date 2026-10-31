import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqtqnojkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqtqnojkt"/>`,
		"fallback": "coolicons:desktop-tower-round",
	});
}

export default Component;
