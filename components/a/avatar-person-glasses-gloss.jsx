import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_gugabas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_gugabas wm-k"/>`,
		"fallback": "withicons:avatar-person-glasses-gloss",
	});
}

export default Component;
