import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmppy4bwq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmppy4bwq"/>`,
		"fallback": "pinhead:deer-with-antlers",
	});
}

export default Component;
