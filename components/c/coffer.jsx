import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgmg2zboc.css';
import '../../css/k/kbcof-b_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgmg2zboc"/><path class="kbcof-b_s"/>`,
		"fallback": "selfhst:coffer",
	});
}

export default Component;
