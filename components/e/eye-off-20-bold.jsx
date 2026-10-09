import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke_77zjpb.css';
import '../../css/b/bblukg9bh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke_77zjpb"/><path class="bblukg9bh"/>`,
		"fallback": "energy-icons:eye-off-20-bold",
	});
}

export default Component;
