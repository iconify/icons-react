import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naqry0ggt.css';
import '../../css/o/olslqwbim.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naqry0ggt"/><path class="olslqwbim"/>`,
		"fallback": "energy-icons:humidifier-48",
	});
}

export default Component;
