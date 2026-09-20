import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2weq6b3x.css';
import '../../css/x/xxy5vlbmj.css';
import '../../css/r/r38z6l46e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2weq6b3x"/><path clip-rule="evenodd" class="xxy5vlbmj"/><path class="r38z6l46e"/>`,
		"fallback": "streamline-block:drink-food-coffee",
	});
}

export default Component;
