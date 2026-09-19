import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpe3dmpgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fpe3dmpgr"/>`,
		"fallback": "griddy-icons:halloween-cauldron",
	});
}

export default Component;
