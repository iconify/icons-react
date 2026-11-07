import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwa9eupgf.css';
import '../../css/j/jut9e4-pi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwa9eupgf"/><path clip-rule="evenodd" class="jut9e4-pi"/>`,
		"fallback": "solar:gallery-send-bold-duotone",
	});
}

export default Component;
