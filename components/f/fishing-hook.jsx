import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pj9n4rb5r.css';
import '../../css/n/ndu6_mbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pj9n4rb5r"/><circle class="ndu6_mbpi"/></g>`,
		"fallback": "lucide:fishing-hook",
	});
}

export default Component;
