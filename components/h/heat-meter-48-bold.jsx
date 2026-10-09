import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df474cc-n.css';
import '../../css/y/yxgyrcb-d.css';
import '../../css/x/xqhhzqtle.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df474cc-n"/><path class="yxgyrcb-d"/><path class="xqhhzqtle"/>`,
		"fallback": "energy-icons:heat-meter-48-bold",
	});
}

export default Component;
