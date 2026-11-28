import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9ce0lb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9ce0lb2a"/>`,
		"fallback": "iconaut:flow-terminator-solid",
	});
}

export default Component;
