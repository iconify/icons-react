import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi7fw_q4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi7fw_q4j"/>`,
		"fallback": "tabler:hexagon-number-9-filled",
	});
}

export default Component;
