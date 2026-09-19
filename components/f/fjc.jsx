import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6mztjbys.css';
import '../../css/m/md286fbip.css';
import '../../css/c/cf_8rq2yw.css';
import '../../css/m/mkaydnbje.css';
import '../../css/p/pj_b07fqq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="a6mztjbys"/><g class="md286fbip"><path class="cf_8rq2yw"/><path class="mkaydnbje"/><path class="pj_b07fqq"/></g></g>`,
		"fallback": "cryptocurrency-color:fjc",
	});
}

export default Component;
