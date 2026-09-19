import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv82l7bbi.css';
import '../../css/a/a-xt3ogtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv82l7bbi"/><path class="a-xt3ogtu"/>`,
		"fallback": "boxicons:chart-stacked-columns",
	});
}

export default Component;
