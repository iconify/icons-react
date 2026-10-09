import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa0o18b5j.css';
import '../../css/a/argg3sbnv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa0o18b5j"/><path class="argg3sbnv"/>`,
		"fallback": "energy-icons:egg-48",
	});
}

export default Component;
