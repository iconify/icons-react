import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f018v5y4u.css';
import '../../css/r/rofz_96kq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f018v5y4u"/><path class="rofz_96kq"/>`,
		"fallback": "selfhst:fileflows-forge-light",
	});
}

export default Component;
