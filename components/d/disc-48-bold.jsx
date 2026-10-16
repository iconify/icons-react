import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moyoz5fkv.css';
import '../../css/h/hlnkiidlf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moyoz5fkv"/><path class="hlnkiidlf"/>`,
		"fallback": "energy-icons:disc-48-bold",
	});
}

export default Component;
