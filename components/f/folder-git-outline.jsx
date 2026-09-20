import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s4hyo4x5h.css';
import '../../css/m/m3qn-my9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s4hyo4x5h"/><path class="m3qn-my9h"/></g>`,
		"fallback": "solar:folder-git-outline",
	});
}

export default Component;
