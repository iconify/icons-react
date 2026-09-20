import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wq6x-syyy.css';
import '../../css/g/gn0805nbm.css';
import '../../css/f/fo8mcj6fc.css';
import '../../css/a/a_9it9b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wq6x-syyy"/><path class="gn0805nbm"/><path class="fo8mcj6fc"/><path class="a_9it9b3w"/></g>`,
		"fallback": "reicon:globe-pointer",
	});
}

export default Component;
