import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6gwrmjs.css';
import '../../css/d/dvrp8ybci.css';
import '../../css/w/wo-i5ub4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj6gwrmjs"/><path clip-rule="evenodd" class="dvrp8ybci"/><path class="wo-i5ub4a"/>`,
		"fallback": "solar:file-user-bold-duotone",
	});
}

export default Component;
