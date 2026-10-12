import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbxahob9m.css';
import '../../css/e/e0y01nbqv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbxahob9m"/><path class="e0y01nbqv"/>`,
		"fallback": "energy-icons:binder-48",
	});
}

export default Component;
