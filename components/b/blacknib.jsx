import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a05wonbip.css';
import '../../css/c/c913fr9up.css';
import '../../css/c/chcv3v1yb.css';
import '../../css/v/vuehnbe_u.css';
import '../../css/u/ueukz9h4d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a05wonbip"/><path class="c913fr9up"/><path class="chcv3v1yb"/><path class="vuehnbe_u"/><path class="ueukz9h4d"/>`,
		"fallback": "fxemoji:blacknib",
	});
}

export default Component;
