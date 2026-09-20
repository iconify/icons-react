import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_ehv2bir.css';
import '../../css/r/r9ydwtb-m.css';
import '../../css/y/yizda5rca.css';
import '../../css/d/d27-lzbxa.css';
import '../../css/y/y83axdbzc.css';
import '../../css/q/qgo9spqhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_ehv2bir"/><path class="r9ydwtb-m"/><circle class="yizda5rca"/><path class="d27-lzbxa"/><path class="y83axdbzc"/><path class="qgo9spqhq"/>`,
		"fallback": "selfhst:baikal",
	});
}

export default Component;
