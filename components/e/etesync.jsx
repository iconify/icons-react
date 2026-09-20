import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhbtucwnq.css';
import '../../css/c/ckrfkccuv.css';
import '../../css/u/ugul67fgy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhbtucwnq"/><ellipse class="ckrfkccuv"/><path class="ugul67fgy"/>`,
		"fallback": "selfhst:etesync",
	});
}

export default Component;
