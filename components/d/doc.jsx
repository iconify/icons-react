import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/x/x-t5wohaj.css';
import '../../css/f/fkz9d-8gw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="x-t5wohaj"/><path class="fkz9d-8gw"/></g>`,
		"fallback": "doodle-icons:doc",
	});
}

export default Component;
