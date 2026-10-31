import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kmy89reyg.css';
import '../../css/k/kt3ezcblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kmy89reyg"/><path class="kt3ezcblq wm-deco"/></g>`,
		"fallback": "withicons-kawaii:barcode",
	});
}

export default Component;
