import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed8xp-2rp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ed8xp-2rp"/>`,
		"fallback": "nrk:glasses",
	});
}

export default Component;
