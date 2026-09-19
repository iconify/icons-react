import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk-i_ibgn.css';
import '../../css/y/ykc7uz8oe.css';
import '../../css/z/z17_xq-jk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk-i_ibgn"/><path class="ykc7uz8oe"/><path class="z17_xq-jk"/>`,
		"fallback": "carbon:chart-median",
	});
}

export default Component;
