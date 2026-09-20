import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/g/ges38-b3z.css';
import '../../css/h/hfuto-b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ges38-b3z"/><path clip-rule="evenodd" class="hfuto-b7o"/></g>`,
		"fallback": "streamline-logos:coroflot-logo",
	});
}

export default Component;
