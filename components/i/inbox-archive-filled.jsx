import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sodr2bcij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sodr2bcij"/>`,
		"fallback": "reicon:inbox-archive-filled",
	});
}

export default Component;
