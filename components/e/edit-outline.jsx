import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y3bs4jbfx.css';
import '../../css/q/qknhedbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="edit-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="y3bs4jbfx"/><path class="qknhedbtq"/></g></g>`,
		"fallback": "cuida:edit-outline",
	});
}

export default Component;
