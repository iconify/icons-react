import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpcpxlb-i.css';
import '../../css/b/bwf-mg5sb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpcpxlb-i"/><path class="bwf-mg5sb"/>`,
		"fallback": "energy-icons:arrow-down-right-48",
	});
}

export default Component;
