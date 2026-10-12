import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu28debah.css';
import '../../css/d/divqy_2wh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mu28debah"/><path class="divqy_2wh"/>`,
		"fallback": "lucide-extended:clipboard-pen-line-filled",
	});
}

export default Component;
