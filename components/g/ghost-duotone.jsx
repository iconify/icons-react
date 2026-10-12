import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/biprxnbsf.css';
import '../../css/g/grq7shx4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="biprxnbsf"/><path class="grq7shx4x"/></g>`,
		"fallback": "lucide-extended:ghost-duotone",
	});
}

export default Component;
