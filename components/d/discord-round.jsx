import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1m971bxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1m971bxp"/>`,
		"fallback": "coolicons:discord-round",
	});
}

export default Component;
