import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3i704izb.css';
import '../../css/r/rypnjzb0p.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3i704izb"/><path class="rypnjzb0p"/>`,
		"fallback": "ant-design:highlight-twotone",
	});
}

export default Component;
