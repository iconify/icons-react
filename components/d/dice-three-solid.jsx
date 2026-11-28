import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrx4xb-sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrx4xb-sl"/>`,
		"fallback": "iconaut:dice-three-solid",
	});
}

export default Component;
