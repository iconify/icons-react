import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/cdjsa9ogp.css';
import '../../css/b/bu-51_byq.css';
import '../../css/y/yvjmprl1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="cdjsa9ogp"/><path class="bu-51_byq"/><path class="yvjmprl1n"/></g>`,
		"fallback": "icon-park-outline:basketball-clothes",
	});
}

export default Component;
