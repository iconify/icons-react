import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csjj4tjvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="csjj4tjvt"/>`,
		"fallback": "gg:drop-opacity",
	});
}

export default Component;
