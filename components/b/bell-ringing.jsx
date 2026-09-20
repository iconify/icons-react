import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba3_y3ujc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba3_y3ujc"/>`,
		"fallback": "tabler:bell-ringing",
	});
}

export default Component;
