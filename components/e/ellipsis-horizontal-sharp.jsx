import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7d-ndb_c.css';
import '../../css/u/uffdfabip.css';
import '../../css/p/pyalxlbvl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="q7d-ndb_c"/><circle class="uffdfabip"/><circle class="pyalxlbvl"/>`,
		"fallback": "famicons:ellipsis-horizontal-sharp",
	});
}

export default Component;
