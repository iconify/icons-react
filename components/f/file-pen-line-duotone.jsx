import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvwejo4ga.css';
import '../../css/l/lcsno4kvg.css';
import '../../css/x/xyi2hiz_c.css';
import '../../css/o/ob9hncb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vvwejo4ga"/><path class="lcsno4kvg"/><path class="xyi2hiz_c"/><path class="ob9hncb7s"/></g>`,
		"fallback": "lucide-extended:file-pen-line-duotone",
	});
}

export default Component;
