import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_-qmpv3t.css';
import '../../css/w/w-fhuabts.css';
import '../../css/v/vnkf6_bjo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_-qmpv3t"/><path class="w-fhuabts"/><path class="vnkf6_bjo"/>`,
		"fallback": "carbon:collapse-all",
	});
}

export default Component;
