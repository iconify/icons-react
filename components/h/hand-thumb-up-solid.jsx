import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmgrhxbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmgrhxbnq"/>`,
		"fallback": "heroicons:hand-thumb-up-solid",
	});
}

export default Component;
