import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydne_bc6v.css';
import '../../css/d/dvx2_-b-v.css';
import '../../css/j/jy19kibqs.css';
import '../../css/o/ollh4jb3j.css';
import '../../css/x/xezvhlv1r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ydne_bc6v"><path class="dvx2_-b-v"/><path class="jy19kibqs"/><path class="ollh4jb3j"/><path class="xezvhlv1r"/></g>`,
		"fallback": "streamline-plump:bug",
	});
}

export default Component;
