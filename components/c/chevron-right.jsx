import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyu_t2b9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyu_t2b9m"/>`,
		"fallback": "struq:chevron-right",
	});
}

export default Component;
