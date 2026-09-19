import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bp1xjpxzc.css';
import '../../css/z/z76lsyb4e.css';
import '../../css/u/uh4ooq67t.css';
import '../../css/a/at19lzvmi.css';
import '../../css/l/lwq_0750w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="bp1xjpxzc"/><path class="z76lsyb4e"/><path class="uh4ooq67t"/><path class="at19lzvmi"/><path class="lwq_0750w"/></g>`,
		"fallback": "icon-park:beer-mug",
	});
}

export default Component;
