import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kubz8lo_c.css';
import '../../css/e/elic3l99c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kubz8lo_c"/><path class="elic3l99c"/>`,
		"fallback": "solar:dumbbell-bold-duotone",
	});
}

export default Component;
