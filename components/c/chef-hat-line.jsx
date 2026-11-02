import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du60o1kxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du60o1kxm"/>`,
		"fallback": "mingcute:chef-hat-line",
	});
}

export default Component;
