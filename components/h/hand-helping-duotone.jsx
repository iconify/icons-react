import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6wq2qewp.css';
import '../../css/v/v1db-bbbt.css';
import '../../css/a/aaralt-wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n6wq2qewp"/><path class="v1db-bbbt"/><path class="aaralt-wc"/></g>`,
		"fallback": "lucide-extended:hand-helping-duotone",
	});
}

export default Component;
