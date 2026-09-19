import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2ildhqge.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2ildhqge"/>`,
		"fallback": "fontisto:beach-slipper",
	});
}

export default Component;
