import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxzfl5btn.css';
import '../../css/w/wsygfsbmd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxzfl5btn"/><path class="wsygfsbmd"/>`,
		"fallback": "energy-icons:clipboard-list-48",
	});
}

export default Component;
