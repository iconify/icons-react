import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdos38jip.css';
import '../../css/k/kcfd8k4na.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdos38jip"/><path class="kcfd8k4na"/>`,
		"fallback": "energy-icons:file-image-48-bold",
	});
}

export default Component;
