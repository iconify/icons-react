import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lybrewbmj.css';
import '../../css/z/zp9omccou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lybrewbmj"/><path class="zp9omccou"/>`,
		"fallback": "solar:bookmark-square-minimalistic-bold",
	});
}

export default Component;
