import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2fiixb1l.css';
import '../../css/b/be1091uiv.css';
import '../../css/u/uwfihhbqp.css';
import '../../css/k/k2vxk9xgp.css';
import '../../css/w/wd1wdbcag.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p2fiixb1l"/><path class="be1091uiv"/><path class="uwfihhbqp"/><path class="k2vxk9xgp"/><path class="wd1wdbcag"/></g>`,
		"fallback": "streamline-color:galaxy-1",
	});
}

export default Component;
