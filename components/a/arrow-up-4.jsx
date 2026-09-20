import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/x5gdxj01y.css';
import '../../css/o/o3d5gyfli.css';
import '../../css/b/brxko-bpp.css';
import '../../css/e/e2_-kz8wl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="x5gdxj01y"/><path clip-rule="evenodd" class="o3d5gyfli"/><path class="brxko-bpp"/><path clip-rule="evenodd" class="e2_-kz8wl"/></g>`,
		"fallback": "streamline-plump-color:arrow-up-4",
	});
}

export default Component;
