import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx6x9k59k.css';
import '../../css/z/zoxpwbb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx6x9k59k"/><path class="zoxpwbb0y"/>`,
		"fallback": "lucide-extended:folder-plus-corner-filled",
	});
}

export default Component;
