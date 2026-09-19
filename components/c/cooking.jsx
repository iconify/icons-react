import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/p/pb0cyqmbn.css';
import '../../css/r/rqymkl4wo.css';
import '../../css/u/u92jjlbhq.css';
import '../../css/m/m4mdfvbxb.css';
import '../../css/h/hprxunert.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="pb0cyqmbn"/><path class="rqymkl4wo"/><path class="u92jjlbhq"/><path class="m4mdfvbxb"/><path class="hprxunert"/></g>`,
		"fallback": "icon-park:cooking",
	});
}

export default Component;
