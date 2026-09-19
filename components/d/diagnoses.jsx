import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t56rxbb5s.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t56rxbb5s"/>`,
		"fallback": "fa-solid:diagnoses",
	});
}

export default Component;
