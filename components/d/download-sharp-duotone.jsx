import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xskf5vaoq.css';
import '../../css/l/ls3uq7iwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xskf5vaoq"/><path class="ls3uq7iwd"/></g>`,
		"fallback": "keyline-icons:download-sharp-duotone",
	});
}

export default Component;
