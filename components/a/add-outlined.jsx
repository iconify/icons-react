import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxzds_lzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxzds_lzk"/>`,
		"fallback": "weui:add-outlined",
	});
}

export default Component;
