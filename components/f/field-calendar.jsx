import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v65bz4avp.css';
import '../../css/b/bs9mhcbzn.css';
import '../../css/u/uua70ltpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v65bz4avp"/><path class="bs9mhcbzn"/><path class="uua70ltpb"/></g>`,
		"fallback": "andrsrxn:field-calendar",
	});
}

export default Component;
