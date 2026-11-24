import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfl-fcnvq.css';
import '../../css/v/vbvjxkbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfl-fcnvq"/><path class="vbvjxkbkg"/>`,
		"fallback": "lucide-extended:biohazard-filled",
	});
}

export default Component;
