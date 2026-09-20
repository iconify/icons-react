import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouvm6tl5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouvm6tl5a"/>`,
		"fallback": "tabler:bell-x",
	});
}

export default Component;
