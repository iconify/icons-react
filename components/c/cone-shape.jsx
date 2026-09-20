import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/viqdd9b0h.css';
import '../../css/t/texupnbuv.css';
import '../../css/e/ep_s25bym.css';
import '../../css/y/y1suvmn2f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="viqdd9b0h"/><path class="texupnbuv"/><path class="ep_s25bym"/><path class="y1suvmn2f"/></g>`,
		"fallback": "streamline-color:cone-shape",
	});
}

export default Component;
