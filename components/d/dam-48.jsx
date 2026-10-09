import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm-2geb9q.css';
import '../../css/n/n33vuzbdr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm-2geb9q"/><path class="n33vuzbdr"/>`,
		"fallback": "energy-icons:dam-48",
	});
}

export default Component;
