import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chchrgbld.css';
import '../../css/h/hockizoar.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chchrgbld"/><path class="hockizoar"/>`,
		"fallback": "thesvg-color:akka",
	});
}

export default Component;
