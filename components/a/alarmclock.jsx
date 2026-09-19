import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da0f09byt.css';
import '../../css/l/l8agopb9m.css';
import '../../css/z/zf8yduldz.css';
import '../../css/b/bz62vsbth.css';
import '../../css/n/n703s5ldj.css';
import '../../css/y/y1ejnebhn.css';
import '../../css/a/azg-b8b3m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da0f09byt"/><path class="l8agopb9m"/><path class="zf8yduldz"/><path class="bz62vsbth"/><path class="n703s5ldj"/><path class="y1ejnebhn"/><path class="azg-b8b3m"/>`,
		"fallback": "fxemoji:alarmclock",
	});
}

export default Component;
