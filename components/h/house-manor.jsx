import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z8hnim85c.css';
import '../../css/o/ohgsxs8qc.css';
import '../../css/l/l50m3pb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z8hnim85c"/><rect class="ohgsxs8qc"/><path class="l50m3pb_b"/></g>`,
		"fallback": "lucide-lab:house-manor",
	});
}

export default Component;
