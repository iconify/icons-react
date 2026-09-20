import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe_jndb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe_jndb5g"/>`,
		"fallback": "thesvg-color:hotjar",
	});
}

export default Component;
