import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjcj41b6z.css';
import '../../css/l/l-n55zbgm.css';
import '../../css/a/a79pf1bey.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjcj41b6z"/><path class="l-n55zbgm"/><path class="a79pf1bey"/>`,
		"fallback": "selfhst:google-docs",
	});
}

export default Component;
