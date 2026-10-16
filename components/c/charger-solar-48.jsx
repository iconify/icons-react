import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8xpsfbik.css';
import '../../css/y/yn9nkwljy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8xpsfbik"/><path class="yn9nkwljy"/>`,
		"fallback": "energy-icons:charger-solar-48",
	});
}

export default Component;
