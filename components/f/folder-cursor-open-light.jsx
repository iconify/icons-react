import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_dcyk29s.css';
import '../../css/i/i3zq9bb_r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_dcyk29s"/><path class="i3zq9bb_r"/>`,
		"fallback": "material-icon-theme:folder-cursor-open-light",
	});
}

export default Component;
