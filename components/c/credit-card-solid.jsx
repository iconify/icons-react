import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxlczvqqd.css';
import '../../css/m/m8_h6-bpz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxlczvqqd"/><path clip-rule="evenodd" class="m8_h6-bpz"/>`,
		"fallback": "teenyicons:credit-card-solid",
	});
}

export default Component;
