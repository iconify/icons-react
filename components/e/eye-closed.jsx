import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2uszoujg.css';

const viewBox = {"width":16,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2uszoujg"/>`,
		"fallback": "octicon:eye-closed",
	});
}

export default Component;
