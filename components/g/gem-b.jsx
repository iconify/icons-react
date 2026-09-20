import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o7cszpblb.css';
import '../../css/l/lkao81bvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o7cszpblb"/><path class="lkao81bvh"/></g>`,
		"fallback": "mage:gem-b",
	});
}

export default Component;
