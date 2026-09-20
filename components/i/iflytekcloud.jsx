import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f28nl8btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f28nl8btr"/>`,
		"fallback": "thesvg:iflytekcloud",
	});
}

export default Component;
