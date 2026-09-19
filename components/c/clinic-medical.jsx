import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3m213b-x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3m213b-x"/>`,
		"fallback": "fa7-solid:clinic-medical",
	});
}

export default Component;
