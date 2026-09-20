import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkps9h2bk.css';
import '../../css/q/q40219bwz.css';
import '../../css/r/rqyk8bb8l.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkps9h2bk"/><path class="q40219bwz"/><path class="rqyk8bb8l"/>`,
		"fallback": "medical-icon:i-billing",
	});
}

export default Component;
