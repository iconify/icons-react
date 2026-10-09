import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njm7sdbty.css';
import '../../css/m/mazh1ozjz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njm7sdbty"/><path class="mazh1ozjz"/>`,
		"fallback": "energy-icons:folder-open-48",
	});
}

export default Component;
