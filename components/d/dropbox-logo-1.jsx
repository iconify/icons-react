import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/l/lm5g1sbcz.css';
import '../../css/m/m6_s_bbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="lm5g1sbcz"/><path class="m6_s_bbvi"/></g>`,
		"fallback": "streamline-logos:dropbox-logo-1",
	});
}

export default Component;
