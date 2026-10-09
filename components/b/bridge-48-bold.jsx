import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfmop767n.css';
import '../../css/r/r5try_ncs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfmop767n"/><path class="r5try_ncs"/>`,
		"fallback": "energy-icons:bridge-48-bold",
	});
}

export default Component;
