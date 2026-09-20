import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh7o_5bce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh7o_5bce"/>`,
		"fallback": "thesvg-color:burton",
	});
}

export default Component;
