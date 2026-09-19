import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgbdqpwkf.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgbdqpwkf"/>`,
		"fallback": "fontisto:deskpro",
	});
}

export default Component;
