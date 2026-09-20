import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yol05lbfq.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yol05lbfq"/>`,
		"fallback": "wi:cloud-refresh",
	});
}

export default Component;
