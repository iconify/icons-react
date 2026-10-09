import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzeztmj2w.css';
import '../../css/j/jq2f_o2_s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzeztmj2w"/><path class="jq2f_o2_s"/>`,
		"fallback": "energy-icons:api-48",
	});
}

export default Component;
