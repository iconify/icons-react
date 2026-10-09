import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymn_1dbbh.css';
import '../../css/n/ndusirsyt.css';
import '../../css/r/r_v2nxmlq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymn_1dbbh"/><path class="ndusirsyt"/><path class="r_v2nxmlq"/>`,
		"fallback": "energy-icons:heat-flow-48-bold",
	});
}

export default Component;
