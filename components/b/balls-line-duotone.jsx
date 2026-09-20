import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ecr67hz-n.css';
import '../../css/b/b84azyabi.css';
import '../../css/w/w__k8yovn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ecr67hz-n"/><path class="b84azyabi"/><path class="w__k8yovn"/></g>`,
		"fallback": "solar:balls-line-duotone",
	});
}

export default Component;
