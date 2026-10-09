import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-myk9bcg.css';
import '../../css/f/fc_ybimmu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-myk9bcg"/><path class="fc_ybimmu"/>`,
		"fallback": "energy-icons:compliance-20",
	});
}

export default Component;
