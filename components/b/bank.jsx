import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gq9eq8bmb.css';
import '../../css/q/qirye3bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="gq9eq8bmb"/><path class="qirye3bju"/></g>`,
		"fallback": "proicons:bank",
	});
}

export default Component;
