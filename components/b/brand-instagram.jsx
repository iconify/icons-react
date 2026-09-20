import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xrwvqnbku.css';
import '../../css/z/z7pn4gb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xrwvqnbku"/><path class="z7pn4gb6n"/></g>`,
		"fallback": "mynaui:brand-instagram",
	});
}

export default Component;
