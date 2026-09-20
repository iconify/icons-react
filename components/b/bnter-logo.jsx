import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/u80whvb_f.css';
import '../../css/q/qjr1g9uki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="u80whvb_f"/><path class="qjr1g9uki"/></g>`,
		"fallback": "streamline-logos:bnter-logo",
	});
}

export default Component;
