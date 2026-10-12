import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/omx8w3bfa.css';
import '../../css/n/nzmariesu.css';
import '../../css/n/nbqssjb9c.css';
import '../../css/z/zyxdf9wen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="omx8w3bfa"/><path class="nzmariesu"/><path class="nbqssjb9c"/><path class="zyxdf9wen"/></g>`,
		"fallback": "lucide-extended:circle-gauge-duotone",
	});
}

export default Component;
