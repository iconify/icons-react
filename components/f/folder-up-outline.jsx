import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4lfqkpls.css';
import '../../css/p/pzmtr-buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4lfqkpls"/><path clip-rule="evenodd" class="pzmtr-buq"/>`,
		"fallback": "solar:folder-up-outline",
	});
}

export default Component;
