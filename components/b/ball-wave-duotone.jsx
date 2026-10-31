import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqg1sds5j.css';
import '../../css/s/sjok7_pru.css';
import '../../css/r/rgpp5pbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lqg1sds5j"/><path class="sjok7_pru"/><path class="rgpp5pbiq"/></g>`,
		"fallback": "lucide-extended:ball-wave-duotone",
	});
}

export default Component;
