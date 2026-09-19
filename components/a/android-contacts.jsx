import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi50_ecyu.css';
import '../../css/m/my8yzv9ss.css';
import '../../css/l/luip11i6o.css';
import '../../css/d/dj_15obqp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi50_ecyu"/><path class="my8yzv9ss"/><g><path class="luip11i6o"/><path class="dj_15obqp"/></g>`,
		"fallback": "ion:android-contacts",
	});
}

export default Component;
