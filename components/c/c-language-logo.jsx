import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/pzzcjbb8o.css';
import '../../css/d/dal7xwb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="pzzcjbb8o"/><path class="dal7xwb5g"/></g>`,
		"fallback": "streamline-logos:c-language-logo",
	});
}

export default Component;
