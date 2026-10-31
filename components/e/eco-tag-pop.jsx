import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgyhjzbke.css';
import '../../css/y/yg0b5l8tt.css';
import '../../css/z/z2riblnjp.css';
import '../../css/p/pa1r83rhh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xgyhjzbke"/><path class="yg0b5l8tt"/><path class="z2riblnjp"/><path class="pa1r83rhh"/></g>`,
		"fallback": "streamline-kameleon-color:eco-tag-pop",
	});
}

export default Component;
