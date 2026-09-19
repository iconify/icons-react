import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv82l7bbi.css';
import '../../css/b/b24lpe48b.css';
import '../../css/y/ya4lqabet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv82l7bbi"/><rect class="b24lpe48b"/><rect class="ya4lqabet"/>`,
		"fallback": "boxicons:chart-bar-big-rows-filled",
	});
}

export default Component;
