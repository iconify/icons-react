import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/v/vwhv-7y8z.css';
import '../../css/l/lqnnr9bgh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="vwhv-7y8z"/><path class="lqnnr9bgh"/>`,
		"fallback": "energy-icons:globe-20",
	});
}

export default Component;
