import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on3rbtb6g.css';
import '../../css/h/h0z9z4bwv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on3rbtb6g"/><path class="h0z9z4bwv"/>`,
		"fallback": "streamline-pixel:content-files-sticky-notepad-2",
	});
}

export default Component;
