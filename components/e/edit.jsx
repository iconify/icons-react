import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nb2dq427q.css';
import '../../css/f/fj-0-lbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nb2dq427q"/><path class="fj-0-lbmz"/></g>`,
		"fallback": "mage:edit",
	});
}

export default Component;
