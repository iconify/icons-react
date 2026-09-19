import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot-zu_b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot-zu_b2p"/>`,
		"fallback": "guidance:changing-room-hanger",
	});
}

export default Component;
