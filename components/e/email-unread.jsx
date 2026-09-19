import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi_la0bqj.css';
import '../../css/v/vf3vx-b1v.css';
import '../../css/a/a1xbh8u7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vi_la0bqj"/><path class="vf3vx-b1v"/><path class="a1xbh8u7c"/>`,
		"fallback": "ion:email-unread",
	});
}

export default Component;
