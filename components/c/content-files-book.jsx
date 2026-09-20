import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2jtlbtwq.css';
import '../../css/w/wab0vacpg.css';
import '../../css/w/wdxeqjb1b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2jtlbtwq"/><path class="wab0vacpg"/><path class="wdxeqjb1b"/>`,
		"fallback": "streamline-pixel:content-files-book",
	});
}

export default Component;
