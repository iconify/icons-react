import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp3sgac-k.css';
import '../../css/y/yja7dnbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp3sgac-k"/><path class="yja7dnbvl"/>`,
		"fallback": "token:gel",
	});
}

export default Component;
