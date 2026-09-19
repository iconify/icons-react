import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9084iy4v.css';
import '../../css/w/w78rzcbvq.css';
import '../../css/k/kuk6t8bzw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9084iy4v"/><path class="w78rzcbvq"/><path class="kuk6t8bzw"/>`,
		"fallback": "ant-design:account-book-twotone",
	});
}

export default Component;
