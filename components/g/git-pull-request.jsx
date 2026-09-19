import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fbev0d3qo.css';
import '../../css/s/sa8oq8bea.css';
import '../../css/n/ng521n2fi.css';
import '../../css/n/nmoouyb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fbev0d3qo"/><circle class="sa8oq8bea"/><circle class="ng521n2fi"/><circle class="nmoouyb9r"/></g>`,
		"fallback": "hugeicons:git-pull-request",
	});
}

export default Component;
