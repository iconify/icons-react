import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txtpdbbzb.css';
import '../../css/t/t2cfwekii.css';
import '../../css/z/zvi_0b-ar.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txtpdbbzb"/><path class="t2cfwekii"/><path class="zvi_0b-ar"/>`,
		"fallback": "selfhst:datapup",
	});
}

export default Component;
