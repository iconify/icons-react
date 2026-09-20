import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7y4svbea.css';
import '../../css/o/o2549tb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7y4svbea"/><path class="o2549tb-c"/>`,
		"fallback": "mingcute:hammer-fill",
	});
}

export default Component;
