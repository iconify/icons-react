import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sq304gt3i.css';
import '../../css/a/a7fo8bbwo.css';
import '../../css/b/bue9mkoxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sq304gt3i"/><path class="a7fo8bbwo"/><path class="bue9mkoxo"/></g>`,
		"fallback": "lucide-extended:cake-duotone",
	});
}

export default Component;
