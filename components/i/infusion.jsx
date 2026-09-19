import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/w19n41b8s.css';
import '../../css/z/zslw-jbti.css';
import '../../css/g/g07kgbb_e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="w19n41b8s"/><path class="zslw-jbti"/><path class="g07kgbb_e"/></g>`,
		"fallback": "icon-park:infusion",
	});
}

export default Component;
