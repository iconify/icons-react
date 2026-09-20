import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppmx33bax.css';

const viewBox = {"width":66.61,"height":34.03,"left":249.8,"top":192.24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppmx33bax"/>`,
		"fallback": "thesvg-color:best-western",
	});
}

export default Component;
