import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9wtmta2j.css';
import '../../css/v/valpkebar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9wtmta2j"/><path class="valpkebar"/>`,
		"fallback": "streamline-freehand:book-flip-page",
	});
}

export default Component;
