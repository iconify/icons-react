import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kf-5qjqrv.css';
import '../../css/n/nt8ol8b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kf-5qjqrv"/><path class="nt8ol8b-t"/></g>`,
		"fallback": "mage:bookmark-check",
	});
}

export default Component;
