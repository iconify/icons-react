import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqu48-7cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqu48-7cw"/>`,
		"fallback": "coolicons:chart-treemap-fill-round",
	});
}

export default Component;
