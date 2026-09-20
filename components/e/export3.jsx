import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpibj_16d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpibj_16d"/>`,
		"fallback": "reicon:export3",
	});
}

export default Component;
