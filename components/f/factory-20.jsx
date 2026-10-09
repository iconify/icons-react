import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymsepxb1r.css';
import '../../css/j/jzqnmq_ec.css';
import '../../css/p/p2m8mnb8n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymsepxb1r"/><path class="jzqnmq_ec"/><path class="p2m8mnb8n"/>`,
		"fallback": "energy-icons:factory-20",
	});
}

export default Component;
