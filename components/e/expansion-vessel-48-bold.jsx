import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoujtnlpy.css';
import '../../css/c/cso2t9k2n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoujtnlpy"/><path class="cso2t9k2n"/>`,
		"fallback": "energy-icons:expansion-vessel-48-bold",
	});
}

export default Component;
