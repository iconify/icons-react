import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjymy35eq.css';
import '../../css/w/w966wlbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pjymy35eq"/><path class="w966wlbyu"/>`,
		"fallback": "lucide-extended:hop-off-filled",
	});
}

export default Component;
