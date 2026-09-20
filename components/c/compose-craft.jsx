import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw2-s_bbh.css';
import '../../css/x/x2s5mg4ls.css';
import '../../css/x/xlvmmucks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw2-s_bbh"/><path class="x2s5mg4ls"/><path class="xlvmmucks"/>`,
		"fallback": "selfhst:compose-craft",
	});
}

export default Component;
