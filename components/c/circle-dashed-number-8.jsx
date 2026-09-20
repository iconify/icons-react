import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpcu_5bjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpcu_5bjw"/>`,
		"fallback": "tabler:circle-dashed-number-8",
	});
}

export default Component;
