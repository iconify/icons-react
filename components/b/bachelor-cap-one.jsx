import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/cd4jh9b2i.css';
import '../../css/u/u87s-dbol.css';
import '../../css/q/q0t9mv_dq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="cd4jh9b2i"/><path class="u87s-dbol"/><path class="q0t9mv_dq"/></g>`,
		"fallback": "icon-park:bachelor-cap-one",
	});
}

export default Component;
