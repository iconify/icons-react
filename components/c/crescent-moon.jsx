import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqnsdnbcn.css';
import '../../css/n/n47uc4bkd.css';
import '../../css/u/ukoujx6ly.css';
import '../../css/y/y1ar7-bhy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqnsdnbcn"/><path class="n47uc4bkd"/><path class="ukoujx6ly"/><path class="y1ar7-bhy"/>`,
		"fallback": "streamline-emojis:crescent-moon",
	});
}

export default Component;
