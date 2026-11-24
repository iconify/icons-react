import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzvlchb2u.css';
import '../../css/w/w1yuff-ay.css';
import '../../css/d/diidstw8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzvlchb2u"/><path clip-rule="evenodd" class="w1yuff-ay"/><path class="diidstw8n"/>`,
		"fallback": "lucide-extended:galaxy-filled",
	});
}

export default Component;
