import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/digkmr3fv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="digkmr3fv"/>`,
		"fallback": "fa7-solid:file-medical",
	});
}

export default Component;
