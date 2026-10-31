import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/r/rh-stne6e.css';
import '../../css/z/zxbcb49ga.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="rh-stne6e"/><path class="zxbcb49ga"/></g>`,
		"fallback": "streamline-kameleon-color:bluetooth-pop",
	});
}

export default Component;
