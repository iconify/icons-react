import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3b3aw3dq.css';
import '../../css/v/v7n04acgi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3b3aw3dq"/><path class="v7n04acgi"/>`,
		"fallback": "energy-icons:audit-48",
	});
}

export default Component;
