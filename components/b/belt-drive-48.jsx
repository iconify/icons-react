import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pouv5lbnl.css';
import '../../css/q/qqjnhll6v.css';
import '../../css/e/efnr8lb3t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pouv5lbnl"/><path class="qqjnhll6v"/><path class="efnr8lb3t"/>`,
		"fallback": "energy-icons:belt-drive-48",
	});
}

export default Component;
