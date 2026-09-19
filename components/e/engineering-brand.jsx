import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/ft2t7bcos.css';
import '../../css/b/blg8u174q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="ft2t7bcos"/><path class="blg8u174q"/></g>`,
		"fallback": "icon-park-outline:engineering-brand",
	});
}

export default Component;
