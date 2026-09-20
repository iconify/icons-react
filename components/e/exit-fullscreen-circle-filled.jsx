import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz2z0-b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cz2z0-b-h"/>`,
		"fallback": "reicon:exit-fullscreen-circle-filled",
	});
}

export default Component;
