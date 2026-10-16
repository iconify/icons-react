import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgev133np.css';
import '../../css/x/xv0ebrkwd.css';
import '../../css/v/v1pbn233l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgev133np"/><path class="xv0ebrkwd"/><path class="v1pbn233l"/>`,
		"fallback": "energy-icons:elevator-48",
	});
}

export default Component;
