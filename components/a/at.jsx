import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujtkal8vv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujtkal8vv"/>`,
		"fallback": "fa-solid:at",
	});
}

export default Component;
