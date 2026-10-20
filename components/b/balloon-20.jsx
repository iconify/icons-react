import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr413t_mq.css';
import '../../css/b/bccw67g_w.css';
import '../../css/c/c0qc5jl9q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr413t_mq"/><path class="bccw67g_w"/><path class="c0qc5jl9q"/>`,
		"fallback": "energy-icons:balloon-20",
	});
}

export default Component;
