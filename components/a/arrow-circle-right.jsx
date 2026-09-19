import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/a/a6q6m-bpx.css';
import '../../css/x/xpeztpb0g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="a6q6m-bpx"/><path class="xpeztpb0g"/></g>`,
		"fallback": "icon-park:arrow-circle-right",
	});
}

export default Component;
