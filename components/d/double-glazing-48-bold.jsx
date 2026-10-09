import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cisvadb6a.css';
import '../../css/y/y-864bbjp.css';
import '../../css/v/v71jzsb3t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cisvadb6a"/><path class="y-864bbjp"/><path class="v71jzsb3t"/>`,
		"fallback": "energy-icons:double-glazing-48-bold",
	});
}

export default Component;
