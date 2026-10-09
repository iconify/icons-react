import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb9x9-c_l.css';
import '../../css/x/x7hggccar.css';
import '../../css/j/jp5w86lrq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb9x9-c_l"/><path class="x7hggccar"/><path class="jp5w86lrq"/>`,
		"fallback": "energy-icons:folder-plus-48",
	});
}

export default Component;
