import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z8s-3kbzd.css';
import '../../css/s/seygw-57p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z8s-3kbzd"/><path class="seygw-57p"/></g>`,
		"fallback": "mage:chevron-right-circle",
	});
}

export default Component;
