import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zid-e6bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zid-e6bvk"/>`,
		"fallback": "token:cnfi",
	});
}

export default Component;
