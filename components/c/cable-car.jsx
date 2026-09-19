import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/yx2zuwn-x.css';
import '../../css/z/zt82co-hu.css';
import '../../css/n/n4n09nu0h.css';
import '../../css/x/xkbow_bdc.css';
import '../../css/g/glgw24bfj.css';
import '../../css/v/vvdgjl_2r.css';
import '../../css/x/xtg8qac6f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="yx2zuwn-x"/><path class="zt82co-hu"/><path class="n4n09nu0h"/><path class="xkbow_bdc"/><path class="glgw24bfj"/><path class="vvdgjl_2r"/><path class="xtg8qac6f"/></g>`,
		"fallback": "icon-park:cable-car",
	});
}

export default Component;
