import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2cw0abjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2cw0abjg"/>`,
		"fallback": "reicon:arrow-left-up-filled",
	});
}

export default Component;
