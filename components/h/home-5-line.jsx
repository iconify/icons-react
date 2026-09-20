import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn__pccuq.css';
import '../../css/v/v9fq-0n-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn__pccuq"/><path class="v9fq-0n-c"/>`,
		"fallback": "mingcute:home-5-line",
	});
}

export default Component;
