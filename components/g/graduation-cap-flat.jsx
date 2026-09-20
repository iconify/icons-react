import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ipquq5qkq.css';
import '../../css/f/fm-h1bcoi.css';
import '../../css/o/orebrnjdr.css';
import '../../css/g/gs_7u5m-w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ipquq5qkq"/><path class="fm-h1bcoi"/><path class="orebrnjdr"/><path class="gs_7u5m-w"/></g>`,
		"fallback": "streamline-plump-color:graduation-cap-flat",
	});
}

export default Component;
