import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/homhz8bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="homhz8bgm"/>`,
		"fallback": "tabler:circle-dashed-number-9",
	});
}

export default Component;
