import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe24ebbhp.css';
import '../../css/w/wr13vpbrq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe24ebbhp"/><path class="wr13vpbrq"/>`,
		"fallback": "ant-design:heart-twotone",
	});
}

export default Component;
