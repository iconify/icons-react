import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/measokbln.css';
import '../../css/c/cydypsmyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="measokbln"/><path class="cydypsmyn"/></g>`,
		"fallback": "streamline-ultimate:credit-card-visa",
	});
}

export default Component;
