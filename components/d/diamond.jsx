import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e5j0jpbhj.css';
import '../../css/o/o8n-38x0t.css';
import '../../css/e/efivi8c9u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="e5j0jpbhj"/><path class="o8n-38x0t"/><path class="efivi8c9u"/></g>`,
		"fallback": "icon-park-outline:diamond",
	});
}

export default Component;
