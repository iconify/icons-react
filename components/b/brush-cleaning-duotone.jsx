import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9xb8t5ip.css';
import '../../css/t/tk37sebgg.css';
import '../../css/a/a-ctiyb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j9xb8t5ip"/><path class="tk37sebgg"/><path class="a-ctiyb8n"/></g>`,
		"fallback": "lucide-extended:brush-cleaning-duotone",
	});
}

export default Component;
