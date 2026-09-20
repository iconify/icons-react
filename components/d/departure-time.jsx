import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5t338bhg.css';
import '../../css/d/d1zirs44f.css';
import '../../css/n/nrhanomix.css';
import '../../css/y/y6en8h2-l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x5t338bhg"/><path class="d1zirs44f"/><path class="nrhanomix"/><path class="y6en8h2-l"/></g>`,
		"fallback": "streamline-flex-color:departure-time",
	});
}

export default Component;
