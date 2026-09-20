import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqefj__pe.css';
import '../../css/i/iulpltu0r.css';
import '../../css/d/d24138bra.css';
import '../../css/x/xcr-srb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zqefj__pe"/><path class="iulpltu0r"/><path class="d24138bra"/><path class="xcr-srb0w"/></g>`,
		"fallback": "tdesign:camera-2",
	});
}

export default Component;
