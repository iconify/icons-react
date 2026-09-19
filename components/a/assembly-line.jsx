import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bdeot9bnh.css';
import '../../css/t/tlktmtbnx.css';
import '../../css/p/plf46m9uf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="bdeot9bnh"/><path class="tlktmtbnx"/><circle class="plf46m9uf"/></g>`,
		"fallback": "icon-park-solid:assembly-line",
	});
}

export default Component;
