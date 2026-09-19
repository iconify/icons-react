import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnksxrbce.css';

const viewBox = {"width":1216,"height":1312};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnksxrbce"/>`,
		"fallback": "fa:close",
	});
}

export default Component;
