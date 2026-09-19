import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfencrbsx.css';
import '../../css/b/buyojelvy.css';
import '../../css/h/hws9e03dq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 pfencrbsx"/><path class="buyojelvy clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 hws9e03dq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:eye-hide-line",
	});
}

export default Component;
