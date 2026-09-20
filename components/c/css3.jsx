import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we5ld5buc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we5ld5buc"/>`,
		"fallback": "uiw:css3",
	});
}

export default Component;
