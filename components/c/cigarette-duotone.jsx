import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wdfqalb9f.css';
import '../../css/g/gmeb2531e.css';
import '../../css/f/fvy498wfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wdfqalb9f"/><path class="gmeb2531e"/><path class="fvy498wfe"/></g>`,
		"fallback": "lucide-extended:cigarette-duotone",
	});
}

export default Component;
