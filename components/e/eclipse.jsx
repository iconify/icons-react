import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbxx3n40q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbxx3n40q"/>`,
		"fallback": "devicon-plain:eclipse",
	});
}

export default Component;
