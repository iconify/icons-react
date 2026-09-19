import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv82l7bbi.css';
import '../../css/j/jrl0cji7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b zv82l7bbi"/><path class="b jrl0cji7d"/>`,
		"fallback": "boxicons:chart-network-filled",
	});
}

export default Component;
