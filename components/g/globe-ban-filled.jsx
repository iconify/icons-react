import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgdwhabwq.css';
import '../../css/w/wozco6-eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgdwhabwq"/><path clip-rule="evenodd" class="wozco6-eg"/>`,
		"fallback": "lucide-extended:globe-ban-filled",
	});
}

export default Component;
