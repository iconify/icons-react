import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/a/atjk8mbde.css';
import '../../css/z/zlk5iuugb.css';
import '../../css/d/dvl3-mbzr.css';
import '../../css/o/of-lgubcw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><line x1="10" x2="38" y1="16" y2="16" class="atjk8mbde"/><path class="zlk5iuugb"/><path class="dvl3-mbzr"/><path class="of-lgubcw"/></g>`,
		"fallback": "icon-park:drink",
	});
}

export default Component;
