import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xggid0b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xggid0b3n"/>`,
		"fallback": "keyline-icons:baby-2-boy",
	});
}

export default Component;
