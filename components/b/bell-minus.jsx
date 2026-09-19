import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv7o6gbgs.css';
import '../../css/a/a9nhzacts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv7o6gbgs"/><path class="a9nhzacts"/>`,
		"fallback": "bx:bell-minus",
	});
}

export default Component;
