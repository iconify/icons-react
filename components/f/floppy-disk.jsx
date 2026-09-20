import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm9ybacuk.css';
import '../../css/b/by_1x0pgb.css';
import '../../css/v/v9muaabmj.css';
import '../../css/r/rq5_dmbfx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dm9ybacuk"/><path class="by_1x0pgb"/><path class="v9muaabmj"/><path class="rq5_dmbfx"/></g>`,
		"fallback": "streamline-color:floppy-disk",
	});
}

export default Component;
