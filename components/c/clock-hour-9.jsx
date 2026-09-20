import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy-20d2cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy-20d2cc"/>`,
		"fallback": "tabler:clock-hour-9",
	});
}

export default Component;
