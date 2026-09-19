import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skkkx6ncv.css';
import '../../css/o/ors_3pbhc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skkkx6ncv"/><path class="ors_3pbhc"/>`,
		"fallback": "garden:arrow-reverse-fill-12",
	});
}

export default Component;
