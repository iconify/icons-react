import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzx2o7b_o.css';
import '../../css/m/mp-vwcv-r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzx2o7b_o"/><path class="mp-vwcv-r"/>`,
		"fallback": "carbon:business-processes",
	});
}

export default Component;
