import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7u5d87up.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7u5d87up"/>`,
		"fallback": "fontisto:flag",
	});
}

export default Component;
