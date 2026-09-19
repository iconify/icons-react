import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kopjo4b-r.css';
import '../../css/h/hp5x7vfmy.css';
import '../../css/x/xbsqhfb2a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kopjo4b-r"/><path class="hp5x7vfmy"/><path class="xbsqhfb2a"/>`,
		"fallback": "ant-design:book-twotone",
	});
}

export default Component;
