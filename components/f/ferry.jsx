import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g6db4obxx.css';
import '../../css/k/krz5z9cll.css';
import '../../css/q/qw_ojibel.css';
import '../../css/w/wapbuubam.css';
import '../../css/m/m00g3lbbv.css';
import '../../css/z/zh0dsbbaz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g6db4obxx"/><path class="krz5z9cll"/><path class="qw_ojibel"/><path class="wapbuubam"/><path class="m00g3lbbv"/><path class="zh0dsbbaz"/></g>`,
		"fallback": "fluent-emoji-flat:ferry",
	});
}

export default Component;
