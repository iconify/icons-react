import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogjhj0zyh.css';
import '../../css/s/s8-x_jb_g.css';
import '../../css/n/n198smeot.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogjhj0zyh"/><path class="s8-x_jb_g"/><path class="n198smeot"/>`,
		"fallback": "flat-color-icons:electrical-threshold",
	});
}

export default Component;
