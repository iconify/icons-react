import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5axnedqy.css';
import '../../css/z/zgat5obkh.css';
import '../../css/x/xfjcxc-8g.css';
import '../../css/k/k60r53b3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5axnedqy"/><path class="zgat5obkh"/><path class="xfjcxc-8g"/><path class="k60r53b3y"/>`,
		"fallback": "energy-icons:battery-rack-48-bold",
	});
}

export default Component;
