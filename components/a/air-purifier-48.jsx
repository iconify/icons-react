import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyz2fo8fs.css';
import '../../css/e/ecbqf8bde.css';
import '../../css/q/qs6411b4e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyz2fo8fs"/><path class="ecbqf8bde"/><path class="qs6411b4e"/>`,
		"fallback": "energy-icons:air-purifier-48",
	});
}

export default Component;
