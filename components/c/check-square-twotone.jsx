import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/k/kd7zaoyhh.css';
import '../../css/d/dc42evbqq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="kd7zaoyhh"/><path class="dc42evbqq"/>`,
		"fallback": "ant-design:check-square-twotone",
	});
}

export default Component;
