import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm6j0-c1z.css';
import '../../css/s/s9jco_ufp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm6j0-c1z"/><path clip-rule="evenodd" class="s9jco_ufp"/>`,
		"fallback": "basil:instagram-solid",
	});
}

export default Component;
