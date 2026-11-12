import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bypt6tfji.css';
import '../../css/x/x6lp5sbsv.css';
import '../../css/y/yxbj3znwq.css';
import '../../css/o/oj59phb1q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bypt6tfji"/><path class="x6lp5sbsv"/><path class="yxbj3znwq"/><path class="oj59phb1q"/>`,
		"fallback": "selfhst:iammeter-light",
	});
}

export default Component;
