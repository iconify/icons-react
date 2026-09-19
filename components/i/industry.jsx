import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqat6lbbe.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqat6lbbe"/>`,
		"fallback": "fa6-solid:industry",
	});
}

export default Component;
