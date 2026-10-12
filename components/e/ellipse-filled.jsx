import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8-_5gdxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8-_5gdxh"/>`,
		"fallback": "lucide-extended:ellipse-filled",
	});
}

export default Component;
