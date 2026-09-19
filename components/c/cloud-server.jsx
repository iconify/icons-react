import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-89fbcca.css';
import '../../css/e/eg3hw6b_q.css';
import '../../css/d/d3bu2f_4i.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-89fbcca"/><path class="eg3hw6b_q"/><path class="d3bu2f_4i"/>`,
		"fallback": "ant-design:cloud-server",
	});
}

export default Component;
