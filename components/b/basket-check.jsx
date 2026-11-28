import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbmauda9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbmauda9g"/>`,
		"fallback": "noviair:basket-check",
	});
}

export default Component;
