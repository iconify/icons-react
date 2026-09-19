import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/o_-ocsn5i.css';
import '../../css/t/tlktmtbnx.css';
import '../../css/v/vm5l4wnay.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="o_-ocsn5i"/><path class="tlktmtbnx"/><circle class="vm5l4wnay"/></g>`,
		"fallback": "icon-park-outline:assembly-line",
	});
}

export default Component;
