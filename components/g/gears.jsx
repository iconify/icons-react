import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g2eg8ec2k.css';
import '../../css/r/rr7aclb4v.css';
import '../../css/n/nngyw5bfh.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g2eg8ec2k"/><path class="rr7aclb4v"/><path class="nngyw5bfh"/></g>`,
		"fallback": "et:gears",
	});
}

export default Component;
