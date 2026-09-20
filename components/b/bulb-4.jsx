import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr_rigy-p.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr_rigy-p"/>`,
		"fallback": "lineicons:bulb-4",
	});
}

export default Component;
