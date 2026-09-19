import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciupeob0b.css';
import '../../css/e/evzchhb-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciupeob0b"/><path class="evzchhb-o"/>`,
		"fallback": "fontisto:automobile",
	});
}

export default Component;
