import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z56x6q5sj.css';
import '../../css/q/qwgvg7v0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z56x6q5sj"/><path class="qwgvg7v0g"/>`,
		"fallback": "streamline-ultimate:cell-border-frame-bold",
	});
}

export default Component;
