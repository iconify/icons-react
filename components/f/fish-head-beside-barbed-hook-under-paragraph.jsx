import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfoz3-mbt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfoz3-mbt"/>`,
		"fallback": "pinhead:fish-head-beside-barbed-hook-under-paragraph",
	});
}

export default Component;
