import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cugtugbfx.css';
import '../../css/r/r-mawcbqk.css';
import '../../css/e/en4c201jt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cugtugbfx"/><path class="r-mawcbqk"/><path class="en4c201jt"/>`,
		"fallback": "token:govi",
	});
}

export default Component;
