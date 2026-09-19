import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkryll1rk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkryll1rk"/>`,
		"fallback": "guidance:accesible-restroom",
	});
}

export default Component;
