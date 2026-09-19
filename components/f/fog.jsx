import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p81y391ul.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p81y391ul"/>`,
		"fallback": "fontisto:fog",
	});
}

export default Component;
