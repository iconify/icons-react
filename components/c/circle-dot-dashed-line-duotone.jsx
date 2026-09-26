import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uni9o8bbi.css';
import '../../css/k/kfn71cctn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uni9o8bbi"/><path class="kfn71cctn"/></g>`,
		"fallback": "solar:circle-dot-dashed-line-duotone",
	});
}

export default Component;
