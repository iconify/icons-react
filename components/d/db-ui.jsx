import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qksq_ubpp.css';
import '../../css/d/d1oljg_vw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qksq_ubpp"/><path class="d1oljg_vw"/>`,
		"fallback": "selfhst:db-ui",
	});
}

export default Component;
