import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxmg0hb1o.css';
import '../../css/g/ghowvhihi.css';
import '../../css/x/xzn7dutzy.css';
import '../../css/s/ss8o3bc4m.css';
import '../../css/m/mdg9jabxs.css';

const viewBox = {"width":1080,"height":1218.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxmg0hb1o"/><path class="ghowvhihi"/><path class="xzn7dutzy"/><path class="ss8o3bc4m"/><path class="mdg9jabxs"/>`,
		"fallback": "thesvg-color:arbitrum",
	});
}

export default Component;
