import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/k/khoyjm01l.css';
import '../../css/d/dfopxo9zu.css';
import '../../css/c/c_i9i8gsy.css';
import '../../css/j/jxs6c_bvc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="khoyjm01l"/><path class="dfopxo9zu"/><path class="c_i9i8gsy"/><path class="jxs6c_bvc"/></g>`,
		"fallback": "streamline-plump:inbox-post",
	});
}

export default Component;
