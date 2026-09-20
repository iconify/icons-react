import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agqa6qbci.css';
import '../../css/i/ic7d043zq.css';
import '../../css/k/kcldt_bnk.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agqa6qbci"/><path class="ic7d043zq"/><path class="kcldt_bnk"/>`,
		"fallback": "medical-icon:i-intensive-care",
	});
}

export default Component;
