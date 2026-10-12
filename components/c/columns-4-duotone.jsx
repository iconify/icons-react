import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/i/iqej-wbvg.css';
import '../../css/d/ddcu1irhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1a2eew1e"/><path class="iqej-wbvg"/><path class="ddcu1irhw"/></g>`,
		"fallback": "lucide-extended:columns-4-duotone",
	});
}

export default Component;
