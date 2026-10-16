import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr591jbfa.css';
import '../../css/y/yu2dp5b7t.css';
import '../../css/w/w3bek7b9i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr591jbfa"/><path class="yu2dp5b7t"/><path class="w3bek7b9i"/>`,
		"fallback": "energy-icons:air-fryer-48-bold",
	});
}

export default Component;
