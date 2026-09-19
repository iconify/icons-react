import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jlkjdbboa.css';
import '../../css/v/vgrcg0npx.css';
import '../../css/n/nmnx5obqv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jlkjdbboa"/><path class="vgrcg0npx"/><path class="nmnx5obqv"/></g>`,
		"fallback": "icon-park-outline:birthday-cake",
	});
}

export default Component;
