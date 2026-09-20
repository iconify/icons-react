import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldin_cbee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldin_cbee"/>`,
		"fallback": "thesvg:ducati",
	});
}

export default Component;
