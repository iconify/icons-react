import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs7ozkfiy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs7ozkfiy"/>`,
		"fallback": "energy-icons:desalination-48",
	});
}

export default Component;
