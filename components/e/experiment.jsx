import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/ayeqpac6o.css';
import '../../css/q/q4c5ixzyh.css';
import '../../css/g/ga6drvbwg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ayeqpac6o"/><path class="q4c5ixzyh"/><path class="ga6drvbwg"/></g>`,
		"fallback": "icon-park-solid:experiment",
	});
}

export default Component;
