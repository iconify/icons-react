import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv82l7bbi.css';
import '../../css/a/arue7cbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b zv82l7bbi"/><path class="arue7cbqf b"/>`,
		"fallback": "boxicons:chart-network",
	});
}

export default Component;
