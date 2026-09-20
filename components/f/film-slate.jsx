import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzk555emz.css';
import '../../css/x/xnc6gibrv.css';
import '../../css/z/z48-avcpx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xzk555emz"/><path class="xnc6gibrv"/><path class="z48-avcpx"/></g>`,
		"fallback": "streamline-color:film-slate",
	});
}

export default Component;
