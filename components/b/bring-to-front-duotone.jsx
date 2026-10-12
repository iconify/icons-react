import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spg4qljtd.css';
import '../../css/c/cbfiuh_ll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="spg4qljtd"/><path class="cbfiuh_ll"/></g>`,
		"fallback": "lucide-extended:bring-to-front-duotone",
	});
}

export default Component;
