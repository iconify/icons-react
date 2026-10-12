import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gte4k_rwf.css';
import '../../css/l/lmhgg8f3d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gte4k_rwf"/><path class="lmhgg8f3d"/>`,
		"fallback": "garden:history-stroke-20",
	});
}

export default Component;
