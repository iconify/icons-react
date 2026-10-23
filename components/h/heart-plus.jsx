import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpw8u2-_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpw8u2-_j"/>`,
		"fallback": "vadivam:heart-plus",
	});
}

export default Component;
