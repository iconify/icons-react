import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ik1jx-bvn.css';
import '../../css/v/vs10c0bmi.css';
import '../../css/n/n3yoqabcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ik1jx-bvn"/><path class="vs10c0bmi"/><path class="n3yoqabcn"/></g>`,
		"fallback": "si:home-duotone",
	});
}

export default Component;
