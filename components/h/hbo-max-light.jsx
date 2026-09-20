import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_khmlbiy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_khmlbiy"/>`,
		"fallback": "selfhst:hbo-max-light",
	});
}

export default Component;
