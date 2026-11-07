import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnb90nbxf.css';
import '../../css/s/s4g8b7q6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnb90nbxf"/><path clip-rule="evenodd" class="s4g8b7q6l"/>`,
		"fallback": "solar:circle-top-up-bold-duotone",
	});
}

export default Component;
