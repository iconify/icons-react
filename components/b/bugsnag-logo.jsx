import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/t/t-nrg-rng.css';
import '../../css/j/j-dvglbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="t-nrg-rng"/><path class="j-dvglbpd"/></g>`,
		"fallback": "streamline-logos:bugsnag-logo",
	});
}

export default Component;
