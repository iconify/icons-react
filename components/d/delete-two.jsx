import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/y/y8v1mtbuh.css';
import '../../css/y/yp12bubun.css';
import '../../css/b/bcjvuuw-u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="y8v1mtbuh"/><path class="yp12bubun"/><path class="bcjvuuw-u"/></g>`,
		"fallback": "icon-park:delete-two",
	});
}

export default Component;
