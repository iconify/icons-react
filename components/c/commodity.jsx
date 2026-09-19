import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/sqougybbp.css';
import '../../css/b/by6efw6xw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="sqougybbp"/><path class="by6efw6xw"/></g>`,
		"fallback": "icon-park-outline:commodity",
	});
}

export default Component;
