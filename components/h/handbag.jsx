import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfoz5e68w.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfoz5e68w"/>`,
		"fallback": "picon:handbag",
	});
}

export default Component;
