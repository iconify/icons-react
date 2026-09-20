import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfm4-3b6w.css';
import '../../css/e/es9h9dxow.css';
import '../../css/b/b8w7fnbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfm4-3b6w"/><path class="es9h9dxow"/><path class="b8w7fnbwz"/>`,
		"fallback": "streamline-freehand:dashboard-browser-gauge",
	});
}

export default Component;
