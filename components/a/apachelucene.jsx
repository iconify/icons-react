import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuosp9q_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuosp9q_p"/>`,
		"fallback": "simple-icons:apachelucene",
	});
}

export default Component;
