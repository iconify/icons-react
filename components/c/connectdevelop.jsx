import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw98ts_6a.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw98ts_6a"/>`,
		"fallback": "fa6-brands:connectdevelop",
	});
}

export default Component;
