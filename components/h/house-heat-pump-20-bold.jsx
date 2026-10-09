import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1mcems0k.css';
import '../../css/d/dp_h2wb9o.css';
import '../../css/b/bcklhmbcb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1mcems0k"/><path class="dp_h2wb9o"/><path class="bcklhmbcb"/>`,
		"fallback": "energy-icons:house-heat-pump-20-bold",
	});
}

export default Component;
