import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xjry5ht5b.css';
import '../../css/b/by678fbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="xjry5ht5b"/><path clip-rule="evenodd" class="by678fbeq"/></g>`,
		"fallback": "streamline-logos:digital-ocean-logo",
	});
}

export default Component;
