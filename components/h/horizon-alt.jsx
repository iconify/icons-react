import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7y00378n.css';

const viewBox = {"width":31,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7y00378n"/>`,
		"fallback": "fontisto:horizon-alt",
	});
}

export default Component;
