import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6d320b8o.css';
import '../../css/k/k-e6hyidt.css';
import '../../css/q/qui88_o6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6d320b8o"/><path class="k-e6hyidt"/><path clip-rule="evenodd" class="qui88_o6s"/>`,
		"fallback": "solar:folder-lock-bold",
	});
}

export default Component;
