import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvledlbdu.css';
import '../../css/q/qun0k1b4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zvledlbdu"/><path class="qun0k1b4t"/></g>`,
		"fallback": "coolicons:folder-edit-corner-duotone-round",
	});
}

export default Component;
