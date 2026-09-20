import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn-tu7bdm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn-tu7bdm"/>`,
		"fallback": "la:bolt-solid",
	});
}

export default Component;
