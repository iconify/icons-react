import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq32xccdr.css';
import '../../css/l/lm5rabblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq32xccdr"/><path class="lm5rabblj"/>`,
		"fallback": "boxicons:arrow-out-up-stroke-circle-half",
	});
}

export default Component;
