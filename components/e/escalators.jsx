import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/or4c5qipf.css';
import '../../css/h/h9bbefbop.css';
import '../../css/a/aijdk7d9i.css';
import '../../css/i/iop-ldbqv.css';
import '../../css/b/bvn9dabbf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="or4c5qipf"/><path class="h9bbefbop"/><path class="aijdk7d9i"/><path class="iop-ldbqv"/><path class="bvn9dabbf"/></g>`,
		"fallback": "icon-park:escalators",
	});
}

export default Component;
