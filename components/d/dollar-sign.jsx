import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1qt20k5x.css';
import '../../css/c/cnpmqjbkf.css';
import '../../css/n/n1frkeb8b.css';
import '../../css/n/nv6oopddu.css';
import '../../css/w/wj3kfezij.css';
import '../../css/o/oat9a2bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1qt20k5x wm-shadow"/><path class="cnpmqjbkf wm-k"/><path class="n1frkeb8b wm-k"/><path class="nv6oopddu wm-k"/><path class="wj3kfezij wm-k"/><path class="oat9a2bar wm-shine"/>`,
		"fallback": "withicons-pastel:dollar-sign",
	});
}

export default Component;
