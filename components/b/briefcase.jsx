import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ao_op1wvm.css';
import '../../css/r/ra4jvswis.css';
import '../../css/v/vni_78k-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ao_op1wvm"/><rect class="ra4jvswis"/><path class="vni_78k-i"/></g>`,
		"fallback": "andrsrxn:briefcase",
	});
}

export default Component;
