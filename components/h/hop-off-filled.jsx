import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecuqskb1m.css';
import '../../css/x/x7ap6acgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ecuqskb1m"/><path class="x7ap6acgy"/>`,
		"fallback": "lucide-extended:hop-off-filled",
	});
}

export default Component;
