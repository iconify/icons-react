import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_9o9ub1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_9o9ub1a"/>`,
		"fallback": "thesvg-color:delphi",
	});
}

export default Component;
