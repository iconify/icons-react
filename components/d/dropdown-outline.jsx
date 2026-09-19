import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo8h7hb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo8h7hb1x"/>`,
		"fallback": "cuida:dropdown-outline",
	});
}

export default Component;
