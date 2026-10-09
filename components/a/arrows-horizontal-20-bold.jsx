import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enr033rrc.css';
import '../../css/j/jvpc1i4ns.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enr033rrc"/><path class="jvpc1i4ns"/>`,
		"fallback": "energy-icons:arrows-horizontal-20-bold",
	});
}

export default Component;
