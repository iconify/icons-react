import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmk-13lct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmk-13lct"/>`,
		"fallback": "coolicons:flower-round",
	});
}

export default Component;
