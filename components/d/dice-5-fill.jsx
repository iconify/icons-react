import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc2sj5asw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc2sj5asw"/>`,
		"fallback": "ri:dice-5-fill",
	});
}

export default Component;
