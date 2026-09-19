import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ourt9_bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ourt9_bgk"/>`,
		"fallback": "cbi:apple-airpods-max",
	});
}

export default Component;
