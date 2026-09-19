import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj_39l2dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj_39l2dc"/>`,
		"fallback": "hugeicons:hashtag",
	});
}

export default Component;
