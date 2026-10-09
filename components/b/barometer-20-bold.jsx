import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/i/ir9wdpb0n.css';
import '../../css/x/xonacibwr.css';
import '../../css/j/ja9-u5bih.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="ir9wdpb0n"/><path class="xonacibwr"/><path class="ja9-u5bih"/>`,
		"fallback": "energy-icons:barometer-20-bold",
	});
}

export default Component;
