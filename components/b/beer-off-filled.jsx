import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5h4mibrn.css';
import '../../css/b/bopimfhwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j5h4mibrn"/><path class="bopimfhwa"/>`,
		"fallback": "lucide-extended:beer-off-filled",
	});
}

export default Component;
