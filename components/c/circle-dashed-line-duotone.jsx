import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pk5gvmbhh.css';
import '../../css/k/k5qm0cbja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pk5gvmbhh"/><path class="k5qm0cbja"/></g>`,
		"fallback": "solar:circle-dashed-line-duotone",
	});
}

export default Component;
