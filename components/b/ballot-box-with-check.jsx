import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6wltsbgl.css';
import '../../css/d/dpqi84-cn.css';
import '../../css/z/zm66z2btq.css';
import '../../css/c/ct9n5ac7q.css';
import '../../css/y/ywm164b0u.css';
import '../../css/g/gp41t2pri.css';
import '../../css/m/mon8qtz6y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6wltsbgl"/><path class="dpqi84-cn"/><path class="zm66z2btq"/><path class="ct9n5ac7q"/><path class="ywm164b0u"/><path class="gp41t2pri"/><path class="mon8qtz6y"/>`,
		"fallback": "streamline-emojis:ballot-box-with-check",
	});
}

export default Component;
