import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dzd9s-zra.css';
import '../../css/e/ejm328bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dzd9s-zra"/><path class="ejm328bje"/></g>`,
		"fallback": "hugeicons:edit-multiple",
	});
}

export default Component;
