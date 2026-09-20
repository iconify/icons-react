import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svd2s_bjj.css';
import '../../css/e/ese12xb1h.css';
import '../../css/h/huatr0-xh.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svd2s_bjj"/><path class="ese12xb1h"/><path class="huatr0-xh"/>`,
		"fallback": "medical-icon:i-hearing-assistance",
	});
}

export default Component;
