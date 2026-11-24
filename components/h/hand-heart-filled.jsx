import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6dx8-byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n6dx8-byl"/>`,
		"fallback": "lucide-extended:hand-heart-filled",
	});
}

export default Component;
