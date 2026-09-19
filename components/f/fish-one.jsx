import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxq5fbbcp.css';
import '../../css/w/wue07mb6g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zxq5fbbcp"/><circle class="wue07mb6g"/></g>`,
		"fallback": "icon-park:fish-one",
	});
}

export default Component;
