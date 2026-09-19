import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glvlf_bmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glvlf_bmz"/>`,
		"fallback": "cbi:france5",
	});
}

export default Component;
