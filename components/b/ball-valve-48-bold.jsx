import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nypiozjlx.css';
import '../../css/w/wybr_2bnz.css';
import '../../css/g/gwg5jv59q.css';
import '../../css/n/niyv1hwum.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nypiozjlx"/><path class="wybr_2bnz"/><path class="gwg5jv59q"/><path class="niyv1hwum"/>`,
		"fallback": "energy-icons:ball-valve-48-bold",
	});
}

export default Component;
