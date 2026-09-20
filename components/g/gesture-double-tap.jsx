import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdk6ubcvg.css';
import '../../css/k/kdupjtxcu.css';
import '../../css/y/yxss69ubf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdk6ubcvg"/><path class="kdupjtxcu"/><path class="yxss69ubf"/>`,
		"fallback": "streamline-freehand:gesture-double-tap",
	});
}

export default Component;
