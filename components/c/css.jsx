import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c65pc6_cx.css';
import '../../css/o/ohg47blkm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c65pc6_cx"/><path class="ohg47blkm"/>`,
		"fallback": "devicon:css",
	});
}

export default Component;
