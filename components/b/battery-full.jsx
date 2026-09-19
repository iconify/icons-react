import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubpd-wbmq.css';
import '../../css/q/qklnfea4v.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubpd-wbmq"/><path class="qklnfea4v"/>`,
		"fallback": "foundation:battery-full",
	});
}

export default Component;
