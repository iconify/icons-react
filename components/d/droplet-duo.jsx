import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5ewjwd3r.css';
import '../../css/t/tmsq5rb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary w5ewjwd3r"/><path class="primary tmsq5rb0d"/>`,
		"fallback": "iconaut:droplet-duo",
	});
}

export default Component;
