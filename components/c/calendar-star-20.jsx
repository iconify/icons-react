import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti4_udjxz.css';
import '../../css/a/af6s1vcxw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti4_udjxz"/><path class="af6s1vcxw"/>`,
		"fallback": "energy-icons:calendar-star-20",
	});
}

export default Component;
