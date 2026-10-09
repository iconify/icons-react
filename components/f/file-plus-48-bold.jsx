import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdos38jip.css';
import '../../css/p/p1kcgj3tk.css';
import '../../css/y/ywhth4bre.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdos38jip"/><path class="p1kcgj3tk"/><path class="ywhth4bre"/>`,
		"fallback": "energy-icons:file-plus-48-bold",
	});
}

export default Component;
