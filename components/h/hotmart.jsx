import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0-v6c_3j.css';

const viewBox = {"width":27,"height":37};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0-v6c_3j"/>`,
		"fallback": "thesvg-color:hotmart",
	});
}

export default Component;
