import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqov2cb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pqov2cb-c"/>`,
		"fallback": "reicon:angle-left-square-filled",
	});
}

export default Component;
