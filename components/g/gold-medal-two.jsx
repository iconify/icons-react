import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-_5gtb7v.css';
import '../../css/d/dsq233cfw.css';
import '../../css/k/k55a8zebe.css';
import '../../css/x/xmrhqsb8p.css';
import '../../css/j/jord0ubjd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p-_5gtb7v"/><path class="dsq233cfw"/><path class="k55a8zebe"/><path class="xmrhqsb8p"/><path class="jord0ubjd"/></g>`,
		"fallback": "icon-park-outline:gold-medal-two",
	});
}

export default Component;
