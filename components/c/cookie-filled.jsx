import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qocb6tbrl.css';
import '../../css/q/qjh4_sbte.css';
import '../../css/a/ak1se0blo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="qocb6tbrl"/><circle class="qjh4_sbte"/><path class="ak1se0blo"/></g>`,
		"fallback": "reicon:cookie-filled",
	});
}

export default Component;
