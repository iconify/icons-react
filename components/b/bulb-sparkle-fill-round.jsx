import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmy6o3vyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmy6o3vyt"/>`,
		"fallback": "coolicons:bulb-sparkle-fill-round",
	});
}

export default Component;
