import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfokd3fxm.css';
import '../../css/j/jmop18yml.css';
import '../../css/y/y4ckp43nh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kfokd3fxm"/><path class="jmop18yml"/><path class="y4ckp43nh"/>`,
		"fallback": "mingcute:hours-fill",
	});
}

export default Component;
