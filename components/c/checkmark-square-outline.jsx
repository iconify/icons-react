import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8ct0bzjh.css';
import '../../css/b/bkce-3brn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8ct0bzjh"/><path class="bkce-3brn"/>`,
		"fallback": "eva:checkmark-square-outline",
	});
}

export default Component;
