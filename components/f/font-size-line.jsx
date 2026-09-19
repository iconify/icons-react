import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucjk8rbpt.css';
import '../../css/u/uss_0hflh.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 ucjk8rbpt"/><path class="clr-i-outline clr-i-outline-path-2 uss_0hflh"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:font-size-line",
	});
}

export default Component;
