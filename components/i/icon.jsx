import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir3tr1blv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir3tr1blv"/>`,
		"fallback": "thesvg:icon",
	});
}

export default Component;
