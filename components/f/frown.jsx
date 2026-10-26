import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/l/litft91pl.css';
import '../../css/u/u-f38749k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="litft91pl"/><path class="u-f38749k"/></g>`,
		"fallback": "doodle-icons:frown",
	});
}

export default Component;
