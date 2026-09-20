import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7u8auytk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7u8auytk"/>`,
		"fallback": "sidekickicons:arrows-crossing-solid",
	});
}

export default Component;
