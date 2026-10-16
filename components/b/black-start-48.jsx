import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq62ijbeb.css';
import '../../css/a/afqjb74vh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq62ijbeb"/><path class="afqjb74vh"/>`,
		"fallback": "energy-icons:black-start-48",
	});
}

export default Component;
