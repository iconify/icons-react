import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/p47c9-mcc.css';
import '../../css/j/jqjqplo7i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="p47c9-mcc"/><path class="jqjqplo7i"/></g>`,
		"fallback": "icon-park-outline:avocado",
	});
}

export default Component;
