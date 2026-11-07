import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu1bol9do.css';
import '../../css/c/crtuvabgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yu1bol9do"/><path class="crtuvabgp"/>`,
		"fallback": "solar:align-vertical-spacing-bold-duotone",
	});
}

export default Component;
