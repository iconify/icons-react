import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/r22aizbfa.css';
import '../../css/s/s_isis4tn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="r22aizbfa"/><path class="s_isis4tn"/></g>`,
		"fallback": "streamline-logos:bitbucket-logo",
	});
}

export default Component;
