import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo961jb7c.css';
import '../../css/k/kit0fd8ao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo961jb7c"/><path class="kit0fd8ao"/>`,
		"fallback": "boxicons:alert-triangle",
	});
}

export default Component;
