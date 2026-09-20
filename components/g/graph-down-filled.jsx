import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y90172upd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y90172upd"/>`,
		"fallback": "reicon:graph-down-filled",
	});
}

export default Component;
