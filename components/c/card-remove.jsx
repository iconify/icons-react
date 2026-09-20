import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e6t48688w.css';
import '../../css/q/qbslvcbcz.css';
import '../../css/d/dl1-i9bhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e6t48688w"/><path class="qbslvcbcz"/><path class="dl1-i9bhd"/></g>`,
		"fallback": "reicon:card-remove",
	});
}

export default Component;
