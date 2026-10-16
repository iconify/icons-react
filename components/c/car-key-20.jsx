import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyz2lacbc.css';
import '../../css/g/g51el4b_s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyz2lacbc"/><path class="g51el4b_s"/>`,
		"fallback": "energy-icons:car-key-20",
	});
}

export default Component;
