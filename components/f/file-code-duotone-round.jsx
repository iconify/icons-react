import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6fkvxgfa.css';
import '../../css/y/yq88tob6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b6fkvxgfa"/><path class="yq88tob6v"/></g>`,
		"fallback": "coolicons:file-code-duotone-round",
	});
}

export default Component;
