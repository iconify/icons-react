import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbdc2tb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bbdc2tb0d"/>`,
		"fallback": "reicon:euro-filled",
	});
}

export default Component;
