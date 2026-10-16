import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze_xj8buq.css';
import '../../css/u/uu-b3jbqp.css';
import '../../css/i/iktbjzb3s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze_xj8buq"/><path class="uu-b3jbqp"/><path class="iktbjzb3s"/>`,
		"fallback": "energy-icons:co2-ship-20",
	});
}

export default Component;
