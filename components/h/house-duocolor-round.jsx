import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg8g3kb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg8g3kb_x"/>`,
		"fallback": "coolicons:house-duocolor-round",
	});
}

export default Component;
