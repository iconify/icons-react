import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziq_jfbrt.css';
import '../../css/q/q8ejpmbvv.css';
import '../../css/n/nsckargef.css';
import '../../css/d/d0j5fxbsi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziq_jfbrt"/><path class="q8ejpmbvv"/><path class="nsckargef"/><path class="d0j5fxbsi"/>`,
		"fallback": "energy-icons:crutch-48",
	});
}

export default Component;
