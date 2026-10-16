import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb9x9-c_l.css';
import '../../css/m/mn1zs2tiq.css';
import '../../css/x/xdak-07ba.css';
import '../../css/g/gpf3pvb8r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb9x9-c_l"/><path class="mn1zs2tiq"/><path class="xdak-07ba"/><path class="gpf3pvb8r"/>`,
		"fallback": "energy-icons:folder-sync-48",
	});
}

export default Component;
