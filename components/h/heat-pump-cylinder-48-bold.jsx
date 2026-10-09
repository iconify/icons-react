import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj475orgc.css';
import '../../css/t/th8tihb4s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj475orgc"/><path class="th8tihb4s"/>`,
		"fallback": "energy-icons:heat-pump-cylinder-48-bold",
	});
}

export default Component;
