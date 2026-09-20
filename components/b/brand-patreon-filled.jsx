import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4fgg8b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4fgg8b2n"/>`,
		"fallback": "tabler:brand-patreon-filled",
	});
}

export default Component;
