import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ah9s1bcom.css';
import '../../css/j/jzotxgntu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ah9s1bcom"/><path class="jzotxgntu"/></g>`,
		"fallback": "solar:arrow-up-to-line-line-duotone",
	});
}

export default Component;
