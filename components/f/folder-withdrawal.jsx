import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/sz6vb1uxi.css';
import '../../css/i/iu5m6abdw.css';
import '../../css/p/ps5xdlbml.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="sz6vb1uxi"/><path class="iu5m6abdw"/><path class="ps5xdlbml"/></g>`,
		"fallback": "icon-park-outline:folder-withdrawal",
	});
}

export default Component;
