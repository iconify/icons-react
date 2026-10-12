import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5bk2nbef.css';
import '../../css/b/bdjsbobgf.css';
import '../../css/w/whrxjkbma.css';
import '../../css/t/tgzsbh4mh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5bk2nbef"/><path class="bdjsbobgf"/><path class="whrxjkbma"/><path class="tgzsbh4mh"/>`,
		"fallback": "energy-icons:fire-station-20",
	});
}

export default Component;
