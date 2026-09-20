import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wzpu635fi.css';
import '../../css/a/a6w_7yipg.css';
import '../../css/d/de4vrqhvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="wzpu635fi"/><path class="a6w_7yipg"/><path class="de4vrqhvr"/></g>`,
		"fallback": "streamline-logos:google-tab-manager-logo",
	});
}

export default Component;
