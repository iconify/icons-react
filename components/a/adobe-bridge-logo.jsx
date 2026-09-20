import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/z0iyx-zmg.css';
import '../../css/s/s-v3g2bgb.css';
import '../../css/z/zoe--_n2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="z0iyx-zmg"/><path class="s-v3g2bgb"/><path class="zoe--_n2a"/></g>`,
		"fallback": "streamline-logos:adobe-bridge-logo",
	});
}

export default Component;
