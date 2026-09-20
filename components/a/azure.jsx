import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjbmqob3y.css';
import '../../css/w/wm3-ncygf.css';
import '../../css/p/p46qrh6ib.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjbmqob3y"/><path class="wm3-ncygf"/><path class="p46qrh6ib"/>`,
		"fallback": "material-icon-theme:azure",
	});
}

export default Component;
