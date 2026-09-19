import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brkao75ez.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brkao75ez"/>`,
		"fallback": "fa7-solid:crown",
	});
}

export default Component;
