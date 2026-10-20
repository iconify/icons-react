import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1wytabzg.css';
import '../../css/n/n65fkti1c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1wytabzg"/><path class="n65fkti1c"/>`,
		"fallback": "energy-icons:binoculars-48-bold",
	});
}

export default Component;
