import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqppmvbnn.css';
import '../../css/g/gtvelac0o.css';
import '../../css/q/qzx-5b9ms.css';
import '../../css/i/iaid-962v.css';
import '../../css/m/mdeua2bvt.css';
import '../../css/c/co1sp2b0p.css';
import '../../css/b/b2n3mngam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wqppmvbnn"/><path class="gtvelac0o"/><path class="qzx-5b9ms"/><path class="iaid-962v"/><path class="mdeua2bvt"/><path class="co1sp2b0p"/><path class="b2n3mngam"/>`,
		"fallback": "solar:bacteria-bold-duotone",
	});
}

export default Component;
