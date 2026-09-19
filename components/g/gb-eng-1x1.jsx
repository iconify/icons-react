import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erzf03bmv.css';
import '../../css/t/t4s1m-ked.css';
import '../../css/w/w_7yn1aap.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erzf03bmv"/><path class="t4s1m-ked"/><path class="w_7yn1aap"/>`,
		"fallback": "flag:gb-eng-1x1",
	});
}

export default Component;
