import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzchkyb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzchkyb5s"/>`,
		"fallback": "cbi:2n",
	});
}

export default Component;
