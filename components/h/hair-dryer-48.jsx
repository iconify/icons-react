import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyjx8ab4r.css';
import '../../css/e/e2y089rqc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyjx8ab4r"/><path class="e2y089rqc"/>`,
		"fallback": "energy-icons:hair-dryer-48",
	});
}

export default Component;
