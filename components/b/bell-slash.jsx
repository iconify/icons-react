import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i-50d2biz.css';
import '../../css/s/sdp6-tbwn.css';
import '../../css/t/t4o8ctohm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i-50d2biz"/><path class="sdp6-tbwn"/><path class="i-50d2biz"/><path class="t4o8ctohm"/></g>`,
		"fallback": "charm:bell-slash",
	});
}

export default Component;
