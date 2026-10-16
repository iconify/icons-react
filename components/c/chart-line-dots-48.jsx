import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utf77lbef.css';
import '../../css/b/bm1aiubys.css';
import '../../css/h/h6bsihbpy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utf77lbef"/><path class="bm1aiubys"/><path class="h6bsihbpy"/>`,
		"fallback": "energy-icons:chart-line-dots-48",
	});
}

export default Component;
