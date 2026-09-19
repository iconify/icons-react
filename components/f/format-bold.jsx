import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca_31fsyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ca_31fsyn"/>`,
		"fallback": "gg:format-bold",
	});
}

export default Component;
