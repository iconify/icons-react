import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8jhe9b6j.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8jhe9b6j"/>`,
		"fallback": "f7:hand-raised",
	});
}

export default Component;
