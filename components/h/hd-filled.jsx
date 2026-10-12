import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vszamwk3o.css';
import '../../css/t/twy8dkvem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vszamwk3o"/><path clip-rule="evenodd" class="twy8dkvem"/>`,
		"fallback": "lucide-extended:hd-filled",
	});
}

export default Component;
