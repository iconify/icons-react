import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvw_drbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvw_drbqh"/>`,
		"fallback": "tabler:circuit-bulb",
	});
}

export default Component;
