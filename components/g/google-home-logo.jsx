import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/f/f7t2kbc4k.css';
import '../../css/t/trza8qb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path clip-rule="evenodd" class="f7t2kbc4k"/><path class="trza8qb0n"/></g>`,
		"fallback": "streamline-logos:google-home-logo",
	});
}

export default Component;
