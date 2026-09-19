import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/s/s8wt-pbzz.css';
import '../../css/f/fkkzfbcoa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="s8wt-pbzz"/><path class="fkkzfbcoa"/></g>`,
		"fallback": "icon-park:circle-double-right",
	});
}

export default Component;
