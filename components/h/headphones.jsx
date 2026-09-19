import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf6js5bwb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf6js5bwb"/>`,
		"fallback": "f7:headphones",
	});
}

export default Component;
