import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pclf19boi.css';
import '../../css/y/yxnkxqeht.css';
import '../../css/y/yfh6-iilh.css';
import '../../css/v/vc7brepqf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pclf19boi"/><path class="yxnkxqeht"/><path class="yfh6-iilh"/><path class="vc7brepqf"/>`,
		"fallback": "selfhst:cyberchef",
	});
}

export default Component;
