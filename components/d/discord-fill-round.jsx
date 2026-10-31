import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrar2pyxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrar2pyxz"/>`,
		"fallback": "coolicons:discord-fill-round",
	});
}

export default Component;
