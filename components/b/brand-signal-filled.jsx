import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laf7_tbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laf7_tbej"/>`,
		"fallback": "tabler:brand-signal-filled",
	});
}

export default Component;
