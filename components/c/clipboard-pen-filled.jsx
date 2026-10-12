import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nauphjpxp.css';
import '../../css/g/grxjc5bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nauphjpxp"/><path clip-rule="evenodd" class="grxjc5bmt"/>`,
		"fallback": "lucide-extended:clipboard-pen-filled",
	});
}

export default Component;
