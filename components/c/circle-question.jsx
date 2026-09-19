import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axud5abfm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axud5abfm"/>`,
		"fallback": "fa7-solid:circle-question",
	});
}

export default Component;
