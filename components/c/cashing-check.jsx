import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/czw1vn6gj.css';
import '../../css/z/ziu6zbbkf.css';
import '../../css/s/sjzsw9bzq.css';
import '../../css/w/ww6c5hlhz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="czw1vn6gj"/><path class="ziu6zbbkf"/><path class="sjzsw9bzq"/><path class="ww6c5hlhz"/></g>`,
		"fallback": "streamline-flex-color:cashing-check",
	});
}

export default Component;
