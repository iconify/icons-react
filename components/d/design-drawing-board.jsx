import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqftncbbn.css';
import '../../css/e/ezsvdgq8b.css';
import '../../css/j/jww928bvl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqftncbbn"/><path class="ezsvdgq8b"/><path class="jww928bvl"/>`,
		"fallback": "streamline-pixel:design-drawing-board",
	});
}

export default Component;
